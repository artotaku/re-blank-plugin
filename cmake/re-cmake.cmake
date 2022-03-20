cmake_minimum_required(VERSION 3.17)

include(FetchContent)

function(fetch_content)
  set(oneValueArgs NAME GIT_REPO GIT_TAG ROOT_DIR)

  cmake_parse_arguments(
      "ARG" # prefix
      "" # options
      "${oneValueArgs}" # single values
      "" # multiple values
      ${ARGN}
  )

  if(NOT ARG_NAME)
    message(FATAL_ERROR "fetch_content requires NAME argument")
  endif()

  macro(set_default_value name default_value)
    if(NOT ${name})
      set(${name} ${default_value})
    endif()
  endmacro()

  set_default_value(ARG_ROOT_DIR "${${ARG_NAME}_ROOT_DIR}")
  set_default_value(ARG_GIT_REPO "${${ARG_NAME}_GIT_REPO}")
  set_default_value(ARG_GIT_TAG  "${${ARG_NAME}_GIT_TAG}")
  set_default_value(ARG_GIT_TAG  "master")

  if(NOT ARG_ROOT_DIR AND NOT ARG_GIT_REPO)
    message(FATAL_ERROR "fetch_content requires either ROOT_DIR argument/${ARG_NAME}_ROOT_DIR variable or GIT_REPO/${ARG_NAME}_GIT_REPO to be defined")
  endif()

  string(TOUPPER "${ARG_NAME}" UPPERCASE_NAME)

  # if root dir is defined, fetch content will not use git
  set(FETCHCONTENT_SOURCE_DIR_${UPPERCASE_NAME} ${ARG_ROOT_DIR})

  FetchContent_Declare(${ARG_NAME}
      GIT_REPOSITORY    ${ARG_GIT_REPO}
      GIT_TAG           ${ARG_GIT_TAG}
      GIT_CONFIG        advice.detachedHead=false
      GIT_SHALLOW       true
      SOURCE_DIR        "${CMAKE_CURRENT_BINARY_DIR}/${ARG_NAME}-src"
      BINARY_DIR        "${CMAKE_CURRENT_BINARY_DIR}/${ARG_NAME}-build"
      CONFIGURE_COMMAND ""
      BUILD_COMMAND     ""
      INSTALL_COMMAND   ""
      TEST_COMMAND      ""
      )

  FetchContent_GetProperties(${ARG_NAME})

  if(NOT ${ARG_NAME}_POPULATED)
    if(FETCHCONTENT_SOURCE_DIR_${UPPERCASE_NAME})
      message(STATUS "Using ${ARG_NAME} from local ${FETCHCONTENT_SOURCE_DIR_${UPPERCASE_NAME}}")
    else()
      message(STATUS "Fetching ${ARG_NAME} ${ARG_GIT_REPO}/tree/${ARG_GIT_TAG}")
    endif()

    FetchContent_Populate(${ARG_NAME})
  endif()

  set(${ARG_NAME}_ROOT_DIR "${${ARG_NAME}_SOURCE_DIR}" PARENT_SCOPE)
  set(${ARG_NAME}_BINARY_DIR "${${ARG_NAME}_BINARY_DIR}" PARENT_SCOPE)

endfunction()

fetch_content(NAME re-cmake)
include("${re-cmake_ROOT_DIR}/main.cmake")
re_cmake_before_project_init()
