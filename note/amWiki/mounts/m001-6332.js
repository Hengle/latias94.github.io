if(typeof AWPageMounts=='undefined'){AWPageMounts={}};AWPageMounts['m001']=[{"name":"01-第一章.md","path":"001-LANS-and-Routing/01-第一章.md","content":"## 错题\r\n\r\n![](https://i.loli.net/2017/08/06/5986408818da3.png)\r\n\r\n![](https://i.loli.net/2017/08/06/598640a130f7e.png)\r\n\r\n![](https://i.loli.net/2017/08/06/598640b116ecd.png)\r\n\r\n![](https://i.loli.net/2017/08/06/598640c299d74.png)\r\n\r\n![](https://i.loli.net/2017/08/06/598640e76d82c.png)\r\n\r\n![](https://i.loli.net/2017/08/06/598640f1ad5e5.png)\r\n\r\n![](https://i.loli.net/2017/08/06/5986411583e27.png)\r\n\r\n![](https://ooo.0o0.ooo/2017/08/06/59864128248e2.png)\r\n\r\n![](https://i.loli.net/2017/08/06/598641325b9cf.png)\r\n\r\n![](https://i.loli.net/2017/08/06/5986413bef490.png)\r\n\r\n![](https://i.loli.net/2017/08/06/5986414478191.png)\r\n","timestamp":1502086185287},{"name":"06-第六章.md","path":"001-LANS-and-Routing/06-第六章.md","content":"![路由器存储器](http://oelv7v3r6.bkt.clouddn.com/a572c141b6276c026860b6da40ab1541.png)\r\n","timestamp":1502086185287},{"name":"07-第七章.md","path":"001-LANS-and-Routing/07-第七章.md","content":"- 无状态地址自动配置 Stateless Address Autoconfiguration (SLAAC)\n- 路由器通告 Router Advertisement (RA)\n- 路由器请求 Router Solicitation (RS)\n- IPv6 组播地址的前缀为 FF00::/8。\n- ICMP 可同时用于 IPv4 和 IPv6。ICMPv4 是 IPv4 的消息协议。ICMPv6 为 IPv6 提供相同的服务。\n- 邻居发现协议 Neighbor Discovery Protocol (ND or NDP)\n- IPv6 路由器和 IPv6 设备间的消息：\n\n  - 路由器请求 (RS) 消息\n  - 路由器通告 (RA) 消息\n\n    - RA 选项 1：SLAAC\n\n      - 默认情况下，RA 消息会提示接收设备使用 RA 消息中的信息创建其自己的 IPv6 全局单播地址及其他信息。DHCPv6 服务器的服务不是必需项。\n      - SLAAC 是无状态的，也就是说没有中央服务器（例如有状态DHCPv6 服务器）来分配全局单播地址和维持设备及其地址的清单。借助 SLAAC，客户端设备使用 RA 消息中的信息创建其自己的全局单播地址。地址的两部分生成如下：\n\n        - 前缀 – RA 消息中接收\n        - 接口 ID – 使用 EUI-64 流程或通过生成一个随机 64 位数字产生。\n\n    - RA 选项 2：SLAAC 和无状态 DHCPv6\n\n      - 通过此选项，RA 消息给予设备以下提示：\n\n        - 使用 SLAAC 创建其自己的 IPv6 全局单播地址.\n        - 使用路由器的本地链路地址，即默认网关地址的 RA 的源 IPv6 地址。\n        - 使用无状态 DHCPv6 服务器获取其他信息，例如 DNS 服务器地址和域名。\n\n      - 使用无状态 DHCPv6 服务器分配 DNS 服务器地址和域名。它不分配全局单播地址。\n\n    - RA 选项 3：有状态 DHCPv6\n\n      - 有状态 DHCPv6 与 IPv4 的 DHCP 相似。使用有状态 DHCPv6 服务器的服务，设备可自动接收编址信息，包括全局单播地址、前缀长度和 DNS 服务器地址。\n      - 通过此选项，RA 消息给予设备以下提示：\n\n        - 使用路由器的本地链路地址，即默认网关地址的 RA 的源 IPv6 地址。\n        - 使用有状态 DHCPv6 服务器获取全局单播地址、DNS 服务器地址、域名和所有其他信息。\n\n      - 使用有状态 DHCPv6 服务器分配并维持哪台设备接收哪个 IPv6 地址的清单。IPv4 的 DHCP 是有状态的。\n\n- IPv6 设备间的消息：\n\n  - 邻居请求 (NS) 消息 （相当于 IPv4 的 ARP 请求)\n  - 邻居通告 (NA) 消息\n  - 邻居请求和邻居通告消息用于地址解析和重复地址检测 Duplicate Address Detection (DAD)。\n\n- A LAN or subnetwork is a collection of devices with their gateway as a router interface.\n\n- 保留 IP 地址\n\n  - Link-Local addresses are assigned automatically by the OS environment and are located in the block 169.254.0.0/16.\n  - The private addresses ranges are 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16\n  - TEST-NET addresses belong to the range 192.0.2.0/24.\n  - The addresses in the block 240.0.0.0 to 255.255.255.254 are reserved as experimental addresses.\n  - ![](http://ww1.sinaimg.cn/large/6ccf577agy1fi8kh8zwskj20te0ndwjy.jpg)\n\n    > **Global unicast**<br>\n    > A global unicast address is similar to a public IPv4 address. These are globally unique, Internet routable addresses. Global unicast addresses can be configured statically or assigned dynamically.<br>\n    > **Link-local**<br>\n    > Link-local addresses are used to communicate with other devices on the same local link. With IPv6, the term link refers to a subnet. Link-local addresses are confined to a single link. Their uniqueness must only be confirmed on that link because they are not routable beyond the link. In other words, routers will not forward packets with a link-local source or destination address.<br>\n    > **Unique local**<br>\n    > Another type of unicast address is the unique local unicast address. IPv6 unique local addresses have some similarity to RFC 1918 private addresses for IPv4, but there are significant differences. Unique local addresses are used for local addressing within a site or between a limited number of sites. These addresses should not be routable in the global IPv6 and should not be translated to a global IPv6 address. Unique local addresses are in the range of FC00::/7 to FDFF::/7.\n\n# 错题\n\n![](http://ww1.sinaimg.cn/large/6ccf577agy1fi8k2bxyhtj20ma0bnjsq.jpg)\n\n![](http://ww1.sinaimg.cn/large/6ccf577agy1fi8k2u2uuhj20ml0ceq42.jpg)\n\n![](http://ww1.sinaimg.cn/large/6ccf577agy1fi8k3b8l53j20mr0k5jsy.jpg)\n\n![](http://ww1.sinaimg.cn/large/6ccf577agy1fi8k3suwi5j20ml0n6act.jpg)\n\n![](http://ww1.sinaimg.cn/large/6ccf577agy1fi8k470xezj20mi0m4gnt.jpg)\n\n![](http://ww1.sinaimg.cn/large/6ccf577agy1fi8k4qp8nfj20s60nw75k.jpg)\n\n![](http://ww1.sinaimg.cn/large/6ccf577agy1fi8nwcecb1j20m709t750.jpg)\n","timestamp":1502086185287},{"name":"08-第八章.md","path":"001-LANS-and-Routing/08-第八章.md","content":"* 子网划分（subnetting）的过程缩减网络的规模以创建更小的广播域\r\n* 小型空间称为子网（subnet)\r\n* 子网掩码长度改变，是最基础的子网划分\r\n  * 使用较长的前缀会减少每个子网能包含的主机数。\r\n  * ![](https://i.loli.net/2017/08/04/5983e6568562e.png)\r\n\r\n* 使用 VLSM （Variable Length Subnet Masks）时，首先对网络划分子网，然后对子网再进行子网划分。该过程可以多次重复，以创建不同大小的子网。\r\n  * ![](http://ww1.sinaimg.cn/large/6ccf577agy1fi8hmxn1i5j20l40f076s.jpg)\r\n  * 最后两位主机位，除去网络识别码（network identification）（网络地址，network address）和广播地址，正好有两个可用主机地址。\r\n\r\n* 私有 IPv4 地址的范围是：\r\n  * 10.0.0.0 - 10.255.255.255，子网掩码为 255.0.0.0 或 /8\r\n  * 172.16.0.0 – 172.31.255.255，子网掩码为 255.240.0.0 或 /12\r\n  * 192.168.0.0 – 192.168.255.255，子网掩码为 255.255.0.0 或 /16\r\n* ![](http://ww1.sinaimg.cn/large/6ccf577agy1fi8ivl8byxj20kd0gtwgv.jpg)\r\n\r\n## 错题\r\n\r\n![](http://ww1.sinaimg.cn/large/6ccf577agy1fi8pzp5fuhj20mf0a5zkz.jpg)\r\n\r\n![](http://ww1.sinaimg.cn/large/6ccf577agy1fi8q0l6qroj20mm0nnju5.jpg)\r\n\r\n![](http://ww1.sinaimg.cn/large/6ccf577agy1fi8q0y074rj20k20ac3z3.jpg)\r\n\r\n![](http://ww1.sinaimg.cn/large/6ccf577agy1fi8q179e19j20ka0ff0u3.jpg)\r\n\r\n![](http://ww1.sinaimg.cn/large/6ccf577agy1fi8q1jin0zj20kc0bd0tr.jpg)\r\n\r\n![](http://ww1.sinaimg.cn/large/6ccf577agy1fi8q1t1yb3j20k20il40g.jpg)\r\n\r\n![](http://ww1.sinaimg.cn/large/6ccf577agy1fi8q230b8jj20kk0l976p.jpg)\r\n\r\n![](http://ww1.sinaimg.cn/large/6ccf577agy1fi8q2fgiksj20kj0m3tb3.jpg)\r\n\r\n![](http://ww1.sinaimg.cn/large/6ccf577agy1fi8q2om4uoj20ke0h775i.jpg)\r\n\r\n![](https://i.loli.net/2017/08/05/5985515129a6f.png) ?\r\n","timestamp":1502086185287}]