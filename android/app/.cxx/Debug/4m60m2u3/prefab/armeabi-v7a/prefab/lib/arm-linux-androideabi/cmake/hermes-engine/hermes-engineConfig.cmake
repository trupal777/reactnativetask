if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "C:/Users/DC/.gradle/caches/transforms-4/49cfafeefea7f7a7fe964c865baefaa7/transformed/hermes-android-0.76.0-debug/prefab/modules/libhermes/libs/android.armeabi-v7a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/DC/.gradle/caches/transforms-4/49cfafeefea7f7a7fe964c865baefaa7/transformed/hermes-android-0.76.0-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

