<table class="sphinxhide">
 <tr>
   <td align="center"><img src="../../media/xilinx-logo.png" width="30%"/><h1> Versal Prime - VCK190 Evaluation Kit Ethernet TRD Tutorial</h1>
   </td>
 </tr>
 <tr>
 <td align="center"><h1> Design Overview </h1>

 </td>
 </tr>
</table>

Design Overview
===============

Introduction
--------------

The Ethernet platform is designed to support a Versal VCK190 board for showcasing the MRMAC IP as a peripheral and PL based Precision Time Protocol (PTP) solution for PTP packet processing. It consists of MRMAC with 4 lanes enabled, each configured at 10G. Each lane of the MRMAC IP is interfaced to one TX and RX channel of an independent MCDMA. The ACAP hardware that is supported on the Versal platform has the following features: 

It contains the Quad base GT in Programmable Logic (PL) to accommodate the movement of Ethernet packets. The output of the GTY is connected to the external NIC. The ethernet data packets are transferred using MRMAC via GT interface.
  

Design Components
------------------

<details>
 <summary><b>Hardware components
 
* VCK190 Evaluation Kit

* QSFP to SFP cable (https://www.fs.com/products/74542.html?attribute=1764)

* Solarflare NIC on x86 host (https://www.xilinx.com/publications/product-briefs/xtremescale-x2522-product-brief.pdf)


</b>
</summary>
</details>

<details>
 <summary><b>Interfaces and IP

* Ethernet Packet generator or receiver
   
	* VCK190 Evaluation Kit
   
	* Solarflare NIC connected on x86 host

   
* PTP Packet Processing

   PL based PTP HW Master and PTP filter and prepend logic


* Auxiliary Peripherals
   * SD
   * I2C
   * UART
   * Ethernet

</b>
</summary>
</details>

<details>
 <summary><b>Software components

* Operating system

   * APU: SMP Linux

   
* Linux kernel subsystems
   * TCP/IP Stack
 </b>
 </summary>
 </details> 
   
<details>
<summary><b>Speed Supported

 * 4x10G
</b>
</summary>
</details> 

**Next Steps**

* [Setting up the Board and Application Deployment](app_deployment.md)
* Go back to the [VCK190 Ethernet TRD design start page](../platform_landing.md)

**References**

* VCK190 Evaluation Board User Guide ([XTP269](https://www.xilinx.com/support/documentation/boards_and_kits/vmk180/2020_2/xtp629-vmk180-setup-c-2020-2.pdf))
* Versal Software Install and Board Setup ((https://www.xilinx.com/support/documentation/boards_and_kits/vmk180/2020_2/xtp629-vmk180-setup-c-2020-2.pdf))
* Versal Architecture and Product Data Sheet: Overview ([DS950]( https://www.xilinx.com/support/documentation/data_sheets/ds950-versal-overview.pdf))


**License**

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at
[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)


Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<p align="center">Copyright&copy; 2021 Xilinx</p>
