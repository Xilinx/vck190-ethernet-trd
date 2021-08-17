Ethernet TRD
===========================================================

The Ethernet platform demonstrates the functionality of the Multi Rate Media Access Control IP (MRMAC) used for transfer of Ethernet and Precision Time Protocol (PTP) packets from the Network Interface Card (NIC) on a host machine to the board and vice versa. The MRMAC IP is present in the programmable logic of the FPGA design. The Programmable Logic also has PTP Packet Processors in both Transmit and Receive Direction.


   
Features
--------
 
* 4x10G configuration
* 2-step Precision Time Protocol (PTP)
* PL based PTP Packet processors for 2-Step PTP operation


Quick Start
-----------
.. toctree::
   :maxdepth: 1
   

   docs/introduction.md
   docs/app_deployment.md
   

Tutorials
---------
.. toctree::
   :maxdepth: 1
  

   ../build_vivado_design.md
   ../build_petalinux.md 


Architecture Documents
----------------------

.. toctree::
   :maxdepth: 1
  

   docs/sw_arch_platform.md
   docs/hw_arch_platform.md
   docs/hw_arch_ptp_pkt_proc.md


Other
-----

.. toctree::
   :maxdepth: 1
  

   docs/issue_sc.md


Xilinx Support
---------------

GitHub issues will be used for tracking requests and bugs. For questions go to [forums.xilinx.com](http://forums.xilinx.com/).

License
-------

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at
[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)




Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.


