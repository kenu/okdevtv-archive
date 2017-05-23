```
Nvidia
                                                                                              

  ERROR: Unable to load the kernel module 'nvidia-drm.ko'.  This happens most frequently when 
         this kernel module was built against the wrong or improperly configured kernel       
         sources, with a version of gcc that differs from the one used to build the target    
         kernel, or if a driver such as rivafb, nvidiafb, or nouveau is present and prevents  
         the NVIDIA kernel module from obtaining ownership of the NVIDIA graphics device(s),  
         or no NVIDIA GPU installed in this system is supported by this NVIDIA Linux graphics 
         driver release.                                                                      

         Please see the log entries 'Kernel module load error' and 'Kernel messages' at the   
         end of the file '/var/log/nvidia-installer.log' for more information.  


nvidia-installer log file '/var/log/nvidia-installer.log'
creation time: Wed Apr 19 04:18:42 2017
installer version: 367.48

PATH: /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin

nvidia-installer command line:
    ./nvidia-installer

Unable to load: nvidia-installer ncurses v6 user interface

Using: nvidia-installer ncurses user interface
-> Detected 8 CPUs online; setting concurrency level to 8.
-> License accepted.
-> Installing NVIDIA driver version 367.48.
-> Performing CC sanity check with CC="/usr/bin/cc".
-> Kernel source path: '/lib/modules/4.4.0-1013-aws/build'
-> Kernel output path: '/lib/modules/4.4.0-1013-aws/build'
-> Performing rivafb check.
-> Performing nvidiafb check.
-> Performing Xen check.
-> Performing PREEMPT_RT check.
-> Cleaning kernel module build directory.


-> done.
-> Kernel module compilation complete.
-> Unable to determine if Secure Boot is enabled: No such file or directory

ERROR: Unable to load the kernel module 'nvidia-drm.ko'.  This happens most frequently when this kernel module was built against the wrong or improperly configured kernel sources, with a version of gcc that differs from the one used to build the target kernel, or if a driver such as rivafb, nvidiafb, or nouveau is present and prevents the NVIDIA kernel module from obtaining ownership of the NVIDIA graphics device(s), or no NVIDIA GPU installed in this system is supported by this NVIDIA Linux graphics driver release.



Please see the log entries 'Kernel module load error' and 'Kernel messages' at the end of the file '/var/log/nvidia-installer.log' for more information.

-> Kernel module load error: No such file or directory

-> Kernel messages:

[  215.507767] nvidia_drm: Unknown symbol drm_atomic_helper_set_config (err 0)

[  215.507771] nvidia_drm: Unknown symbol drm_atomic_helper_connector_duplicate_state (err 0)

[  215.507776] nvidia_drm: Unknown symbol drm_atomic_set_mode_for_crtc (err 0)

[  215.507784] nvidia_drm: Unknown symbol drm_connector_cleanup (err 0)

[  215.507791] nvidia_drm: Unknown symbol drm_universal_plane_init (err 0)

[  215.507798] nvidia_drm: Unknown symbol drm_atomic_helper_crtc_reset (err 0)

[  215.507805] nvidia_drm: Unknown symbol drm_object_property_set_value (err 0)

[  215.507813] nvidia_drm: Unknown symbol drm_encoder_init (err 0)

[  215.507820] nvidia_drm: Unknown symbol drm_vblank_init (err 0)

[  215.507827] nvidia_drm: Unknown symbol drm_dev_unref (err 0)

[  215.507835] nvidia_drm: Unknown symbol drm_kms_helper_hotplug_event (err 0)

[  215.507842] nvidia_drm: Unknown symbol drm_mode_sort (err 0)

[  215.507847] nvidia_drm: Unknown symbol drm_atomic_get_plane_state (err 0)

[  215.507851] nvidia_drm: Unknown symbol drm_atomic_helper_swap_state (err 0)

[  215.507855] nvidia_drm: Unknown symbol drm_atomic_helper_page_flip (err 0)

[  215.507859] nvidia_drm: Unknown symbol drm_atomic_helper_connector_reset (err 0)

[  215.507863] nvidia_drm: Unknown symbol drm_mode_config_cleanup (err 0)

[  215.507867] nvidia_drm: Unknown symbol drm_dev_alloc (err 0)

[  215.507872] nvidia_drm: Unknown symbol drm_atomic_helper_crtc_duplicate_state (err 0)

[  215.507876] nvidia_drm: Unknown symbol drm_crtc_index (err 0)

[  215.507879] nvidia_drm: Unknown symbol drm_atomic_helper_update_plane (err 0)

[  215.507884] nvidia_drm: Unknown symbol drm_dev_register (err 0)

[  215.507888] nvidia_drm: Unknown symbol drm_atomic_get_connector_state (err 0)

[  215.507892] nvidia_drm: Unknown symbol drm_release (err 0)

[  215.507896] nvidia_drm: Unknown symbol drm_gem_prime_export (err 0)

ERROR: Installation has failed.  Please see the file '/var/log/nvidia-installer.log' for details.  You may find suggestions on fixing installation problems in the README available on the Linux driver download page at www.nvidia.com.


```