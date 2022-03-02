PCIe TRD 
===========================================================

The PCIe TRD demonstrates video frames being transferred from a x86 host machine (root complex) to the VMK180 evaluation board (endpoint) through the PCIe QDMA bridge interface for data processing. A 2D filter has been used to demonstrate image processing on the end point and finally transfers it back to host where it is displayed on monitor.

.. image:: ../media/platform2_image_landing.JPG
   :width: 1200
   :alt:  Smart Camera Landing
   

Features
-------------------
* Demonstration of Board as PCIe End-Point accelerator Card
* User programmable 2D filter as a video accelerator on card.
* Loop Back of processed 4k Video data over PCIe
* Live Display of Loop backed video on Host with OpenCV based GUI
* Jupyter notebook based power and performance monitoring



Quick Start
-------------------------
.. toctree::
   :maxdepth: 1


   docs/introduction_aib.md
   docs/app_deployment_aib.md

Tutorials
-------------
.. toctree::
   :maxdepth: 1


   ../building_the_design.md
   ../build_vivado_design.md
   ../build_vitis_platform.md
   ../build_accel.md
   ../build_petalinux.md   

Architecture Documents
---------------------------
.. toctree::
   :maxdepth: 1


   docs/sw_arch_platform_aib.md
   docs/hw_arch_platform_aib.md
   docs/hw_arch_accel_aib.md


Xilinx Support
------------------------
GitHub issues will be used for tracking requests and bugs. For questions go to [forums.xilinx.com](http://forums.xilinx.com/).

License
------------------
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at
[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

