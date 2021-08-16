<table class="sphinxhide">
 <tr>
   <td align="center"><img src="../../media/xilinx-logo.png" width="30%"/><h1> Versal Prime -VCK190 Evaluation Kit <br> Ethernet TRD Tutorial</h1>
   </td>
 </tr>
 <tr>
 <td align="center"><h1> Hardware Architecture of the PTP Packet Processor </h1>

 </td>
 </tr>
</table>

Hardware Acchitecture of the PTP Packet Processor
------------------------------------------------------------

### PTP Tx HW MASTER IP

The PTP HW Master receives the necessary information from the USER-APP fields of the AXI MCDMA for capturing timestamp and storing it in memory for the Transmitted PTP packets. The address of the memory where the timestamp needs to be stored is provided by the USER-APP fields of AXI MCDMA Control stream.
The SW provides a 2-bit PTP flag. Based on the value of the Flag bits, the PTP HW Master drives the tx_ptp_1588op_in [1:0] interface of MRMAC.
MRMAC performs the PTP operation based on the 2 bit value of tx_ptp_1588op_in[1:0] as seen below:

o 2’b00 – No operation: no timestamp is taken, and the frame is not modified.

o 2’b01 – 1-step: a timestamp should be taken and inserted into the frame.

o 2’b10 – 2-step: a timestamp should be taken and returned to the client using the additional ports of 2-step operation. The frame itself is not modified.

o 2’b11 – Reserved

![](../../media/Enhanced_PTP_logic_pipeline.PNG)


The PTP HW Master supports 2-step mode only.

When the ptp flag value is “10”, the PTP HW Master initiates a memory write operation of the timestamp value. The timestamp value is written into the memory via NoC.
The PTP HW Master makes the final bit 1 (qualifier bit) to indicate the memory write completion to Software.

### Rx PTP PACKET DETECT LOGIC IP

PTP Packet Detect and Timestamp Prepend (PDTP) IP detects the incoming PTP Packets and prepends the 80 bit Timestamp information to all the incoming AXI Stream Ethernet packets going to MCDMA in the Receive path.
It sends the detected PTP packet information to the MCDMA and sets a Qualifier bit which indicates the Packet is a PTP Packet.


Protocols Supported:

o PTP Packet over IEEEE 802.3

o PTP Packet over UDP IPV4 – Version 1 and Version 2

o PTP Packet over UDP IPV6 – Version 1 and Version 2

The PDTP checks the Type field of the received packet whenever a new Ethernet packet arrives and also checks for the Multicast IP Destination Address for UDP IPV4/IPV6     Packets, to carry out the PTP detection.



**Next Steps**
* Go to the [SW Architecture Platform page](./sw_arch_platform.md) 
* Go back to the [VCK190 Ethernet TRD design start page](../platform_landing.md)


**License**

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at
[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)


Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<p align="center">Copyright&copy; 2021 Xilinx</p>
