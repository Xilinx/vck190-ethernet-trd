MRMAC Ethernet TRD
===========================================================

The Ethernet platform demonstrates the functionality of the Multi Rate Media Access Control (MRMAC) IP  used to transfer Ethernet and Precision Time Protocol (PTP) packets between the Network Interface Card (NIC) on a host machine to a VCK190 board or between two VCK190 boards. The MRMAC IP is present in the Programmable Logic (PL) of the FPGA design. The PL also has PTP Packet Processors in both Transmit (TX) and Receive (RX) directions.


   
Features
--------
 
* 4x10G/4x25G configuration
* Run-time switching between 10G and 25G
* 2-step Precision Time Protocol (PTP)
* 1-step PTP (E2E and P2P)
* PTP packet over IEEEE 802.3
* PTP packet over UDP IPV4
* Supports 1500 and 9000 MTU size

Setups Tested

*	VCK 190 Board <-> VCK 190 Board 
*	VCK 190 Board <-> NIC Card (Solarflare X2522)
	
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

Architecture Documents
----------------------

.. toctree::
   :maxdepth: 1
  

   docs/sw_arch_platform.md
   docs/hw_arch_platform.md
   docs/hw_arch_ptp_pkt_proc.md


Others
------

.. toctree::
   :maxdepth: 1
  

   docs/issue_sc.md
   docs/revision_history.md

PTP 1588 Phase Synchronization (2022.2 Phase sync TRD) 
------------------------------------------------------
**Note: This section applies to 2022.2 Phase Synchronization TRD only.**

.. toctree::
   :maxdepth: 1
   
   docs/phase_sync_deployment.md 

Porting the TRD package to VMK180 Board
----------------------------------------
.. toctree::
   :maxdepth: 1
   
   docs/vmk_180_porting.md
   
Xilinx Support
---------------

GitHub issues will be used for tracking requests and bugs. For questions go to http://forums.xilinx.com/.


License
-------

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0




Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.


