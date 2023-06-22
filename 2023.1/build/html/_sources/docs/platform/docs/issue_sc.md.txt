<table class="sphinxhide">
 <tr>
   <td align="center"><img src="../../media/xilinx-logo.png" width="30%"/><h1>Versal Prime -VCK190 Evaluation Kit <br>Ethernet TRD Tutorial</h1>
   </td>
 </tr>
 <tr>
 <td align="center"><h1>Known Issues and Limitations</h1>

 </td>
 </tr>
</table>

Known Issues
============


* PTP application may give time out error when CPU load is high. By default, PTP application waits for Tx timestamp.
If timestamp is not obtained within the specified wait time then PTP application gives timeout error.

* When running iperf, the user is expected to see a slightly lower throughput on the port on which dhcp server or other broadcast apps are running.

* Enhanced PTP logic supports 1-step PTP operation at 25G speed only. There is no support for 1-step PTP operation at 10G.

* Enhanced PTP logic supports only L2 and UDP IPv4 PTP packets.

* In 25G UDP (MTU 9000) use case, when running iperf (as a server) + ptp (as a slave) on VCK190 board, PTP synchronization might fluctuate.


**License**

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at
[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)


Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<p align="center">Copyright&copy; 2022 Xilinx</p>
