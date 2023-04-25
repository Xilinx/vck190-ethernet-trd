Search.setIndex({"docnames": ["docs/build_vivado_design", "docs/platform/docs/app_deployment", "docs/platform/docs/hw_arch_platform", "docs/platform/docs/hw_arch_ptp_pkt_proc", "docs/platform/docs/introduction", "docs/platform/docs/issue_sc", "docs/platform/docs/phase_sync_deployment", "docs/platform/docs/revision_history", "docs/platform/docs/sw_arch_platform", "docs/platform/docs/vmk_180_porting", "docs/platform/platform_landing", "index"], "filenames": ["docs/build_vivado_design.md", "docs/platform/docs/app_deployment.md", "docs/platform/docs/hw_arch_platform.md", "docs/platform/docs/hw_arch_ptp_pkt_proc.md", "docs/platform/docs/introduction.md", "docs/platform/docs/issue_sc.md", "docs/platform/docs/phase_sync_deployment.md", "docs/platform/docs/revision_history.md", "docs/platform/docs/sw_arch_platform.md", "docs/platform/docs/vmk_180_porting.md", "docs/platform/platform_landing.rst", "index.rst"], "titles": ["TRD Package", "Setting up the Board and Application Deployment", "Hardware Architecture of the Platform", "Hardware Acchitecture of the PTP Packet Processor", "Design Overview", "Known Issues", "IEEE 1588 PTP Phase synchronization Platform", "Revision History", "Software Architecture of the Platform", "Steps to Build the TRD Package for VMK180 Board", "Ethernet TRD", "VCK190 ETHERNET TRD Documentation"], "terms": {"versal": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "prime": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "vck190": [0, 2, 3, 4, 5, 7, 8, 9, 10], "evalu": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "kit": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "us": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "vivado": [0, 6, 9], "note": [0, 1, 6, 8, 9], "skip": 0, "follow": [0, 1, 2, 4, 6, 8, 9], "have": [0, 1], "alreadi": 0, "been": [0, 1], "clone": 0, "extract": [0, 3, 8], "work": [0, 6, 9], "repositori": 0, "download": [0, 1, 6, 9], "from": [0, 1, 2, 3, 6, 8, 9], "sourc": [0, 6, 9], "unzip": [0, 1, 6, 9], "navig": [0, 6, 9], "ethernet": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "2022": [0, 1, 2, 3, 4, 5, 6, 8, 9], "2": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10], "which": [0, 2, 3, 5, 6, 9], "directori": [0, 1, 6, 9], "The": [0, 1, 2, 3, 4, 6, 8, 9, 10], "hierarchi": [0, 6], "shown": [0, 1, 6, 9], "below": [0, 3, 6, 9], "snapshot": [0, 6, 8], "contain": [0, 1, 2, 4, 6], "ha": [0, 2, 3, 4, 6, 10], "script": [0, 1, 6, 9], "entir": [0, 6], "softwar": [0, 1, 2, 3, 4, 5, 6, 7, 9, 10], "singl": [0, 6], "run": [0, 5, 9, 10], "readm": [0, 6], "md": [0, 6], "document": [0, 1, 6], "folder": [0, 6], "thi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "show": [0, 1, 2, 6, 9], "how": [0, 1, 6], "suit": [0, 2, 6, 9], "tool": [0, 1, 6, 9], "gener": [0, 1, 2, 4, 6, 8, 9], "subsequ": [0, 6], "go": [0, 1, 2, 3, 4, 6, 8, 9, 10], "cd": [0, 1, 6], "command": [0, 3, 9], "sdcard": [0, 6], "wic": [0, 1, 6, 9], "call": [0, 6], "lower": [0, 5, 6], "level": [0, 2, 6], "mai": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "take": [0, 2, 6, 8], "coupl": [0, 6], "hour": [0, 6], "depend": [0, 6], "system": [0, 1, 2, 4, 6, 8], "specif": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "make": [0, 1, 3, 6, 9], "ye": [0, 6], "1": [0, 1, 2, 3, 5, 6, 10], "alon": [0, 6], "applic": [0, 2, 3, 4, 5, 7, 8, 9, 10], "main": [0, 2, 6, 9], "tcl": [0, 6, 9], "popul": [0, 6], "block": [0, 1, 2, 3, 6, 9], "final": [0, 3, 6], "design_xsa": [0, 6, 9], "locat": [0, 3, 6, 9], "working_dir": [0, 9], "vck190_ethernet_platform": [0, 6, 9], "mrmac_subsys_wrapp": [0, 6, 9], "vivado_design": 0, "name": [0, 1, 6], "job": 0, "n": 0, "ar": [0, 1, 2, 4, 5, 6], "option": [0, 6], "requir": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "onli": [0, 1, 5, 6], "you": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "need": [0, 3, 8, 9], "chang": [0, 9], "open": [0, 9], "first": [0, 1, 8], "gui": [0, 9], "consol": [0, 1], "open_project": 0, "mrmac_subsi": [0, 9], "xpr": [0, 9], "In": [0, 1, 2, 3, 5, 6, 9], "pane": [0, 9], "left": [0, 9], "hand": [0, 9], "side": [0, 6, 9], "under": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "ip": [0, 1, 2, 4, 6, 8, 9, 10], "integr": [0, 3, 4], "click": [0, 9], "an": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "becom": 0, "visibl": [0, 1], "process": [0, 2, 3, 4], "ps": 0, "other": [0, 1, 5, 11], "pl": [0, 2, 4, 10], "program": [0, 9], "debug": [0, 9], "devic": [0, 1, 2, 3, 4, 8, 9], "pdi": [0, 9], "avail": [0, 1, 9], "platform_nam": [0, 9], "projec": [0, 9], "impl_1": [0, 9], "select": [0, 1, 6, 9], "export": [0, 9], "dialog": 0, "box": 0, "choos": [0, 8], "includ": [0, 2, 8, 9], "provid": [0, 2, 3, 6, 8], "default": [0, 1, 5], "save": [0, 1, 6, 9], "A": [0, 8, 9], "warn": 0, "messag": [0, 6], "appear": 0, "modul": 0, "overwrit": 0, "exist": 0, "displai": 0, "finish": 0, "section": [0, 1, 2, 6], "given": [0, 2, 3, 6], "config": [0, 9], "get": [0, 1, 9], "hw": [0, 2, 4, 8, 9], "descript": [0, 3, 9], "path": [0, 2, 6, 9], "silentconfig": [0, 9], "match": 0, "previou": 0, "compress": [0, 1, 9], "format": [0, 1, 6, 9], "extra": [0, 9], "arg": [0, 9], "c": [0, 1, 6, 8, 9], "xz": [0, 1, 9], "linux": [0, 1, 4, 6, 8, 9], "sdimag": [0, 1, 9], "tip": 0, "assum": [0, 6], "fix": 0, "partit": 0, "size": [0, 10], "can": [0, 2, 4, 6, 8, 9], "significantli": 0, "e": [0, 9], "g": [0, 6], "uncompress": [0, 1, 9], "d": [0, 1, 9], "v": [0, 1, 9], "output": [0, 1, 2, 4], "flash": 0, "sd": [0, 4], "card": [0, 10], "balena": [0, 1], "etcher": [0, 1], "function": [0, 6, 8, 10], "equival": [0, 6], "prebuilt": [0, 1, 6], "set": [0, 3, 4, 6, 8, 9, 10], "up": [0, 4, 6, 9, 10], "board": [0, 2, 4, 5, 6, 8, 11], "deploy": [0, 4, 8, 9, 10], "back": [0, 1, 2, 3, 4, 6, 8, 9], "target": 0, "start": [0, 1, 2, 3, 4, 6, 8, 9, 11], "page": [0, 1, 2, 3, 4, 6, 8, 9], "For": [0, 1, 2, 3, 6, 8, 10], "more": [0, 3, 6, 8], "inform": [0, 2, 3, 8], "setup": [0, 4, 10], "interfac": [0, 1, 2, 3, 4, 6, 10], "xilinx": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11], "viti": 0, "unifi": 0, "ug1393": 0, "user": [0, 3, 4, 5, 8], "guid": [0, 4], "ug1144": 0, "apach": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "version": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "0": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "except": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "complianc": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "obtain": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "copi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "http": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "www": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "org": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "unless": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "law": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "agre": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "write": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "distribut": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "AS": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "IS": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "basi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "without": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "warranti": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "OR": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "condit": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "OF": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "ani": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "kind": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "either": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "express": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "impli": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "see": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "languag": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "govern": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "permiss": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "limit": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "copyright": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "trd": [1, 2, 3, 4, 5, 7, 8], "tutori": [1, 2, 3, 4, 5, 7, 8, 11], "imag": 1, "design": [1, 2, 3, 6, 8, 10], "vck190_ethernet_trd_prebuilt_2022": [1, 6], "zip": 1, "file": [1, 2, 3, 4, 5, 7, 8, 10], "termin": 1, "emul": 1, "exampl": 1, "window": [1, 6], "teraterm": 1, "osdn": 1, "net": [1, 8], "project": [1, 6, 9], "ttssh2": 1, "picocom": 1, "github": [1, 10], "com": [1, 10], "npat": 1, "efault": 1, "releas": [1, 6], "disk": 1, "util": 1, "machin": [1, 10], "4": [1, 4, 6], "x": 1, "nic": [1, 2, 4, 10], "100g": [1, 3, 4], "qsfp28": 1, "sfp28": 1, "cabl": [1, 4], "iperf3": 1, "figur": [1, 2], "jumper": 1, "one": [1, 3, 4, 6], "time": [1, 4, 5, 6, 8, 10], "should": [1, 3], "deliv": 1, "howev": 1, "good": 1, "doubl": 1, "check": [1, 3, 8], "when": [1, 3, 5, 8], "sure": [1, 6, 9], "remov": 1, "j326": 1, "7": 1, "8": [1, 6], "sysctrl": 1, "sw11": 1, "ON": 1, "off": 1, "bit": [1, 3, 6, 8], "abov": 1, "pictur": 1, "usd": 1, "insert": [1, 3, 6], "slot": [1, 6], "It": [1, 2, 3, 4], "recommend": 1, "latest": 1, "sw1": 1, "extern": [1, 2, 4, 8], "connect": [1, 2, 4, 6], "qsfp": [1, 4], "sfp": [1, 4], "port": [1, 2, 3, 5, 6, 11], "j288": 1, "serial": 1, "come": 1, "usb": 1, "connector": 1, "jtag": 1, "uart": [1, 4], "three": 1, "manag": [1, 9], "uart0": 1, "uart1": 1, "control": [1, 2, 3, 6, 8, 10], "baud": 1, "rate": [1, 2, 6, 8, 10], "115200": 1, "data": [1, 2, 3, 4, 8], "pariti": 1, "none": 1, "stop": 1, "flow": [1, 2, 10], "pre": [1, 6], "built": [1, 6], "packag": [1, 11], "your": [1, 6], "comput": [1, 6], "altern": 1, "through": [1, 4], "build": [1, 10], "petalinux": 1, "local": [1, 6], "To": [1, 9], "microsd": [1, 6], "maco": 1, "instruct": 1, "onto": [1, 2], "eject": [1, 6], "os": 1, "onc": [1, 6], "raw": 1, "written": [1, 3], "abl": [1, 6], "fat32": [1, 6], "resid": 1, "bin": [1, 6], "u": [1, 9], "scr": [1, 6, 9], "kernel": [1, 4, 8], "second": [1, 6], "patit": 1, "ext4": 1, "root": 1, "allow": 1, "view": 1, "rootf": [1, 6, 9], "recogn": 1, "power": [1, 6], "configur": [1, 4, 6, 8, 9, 10], "idt": [1, 6, 7], "driver": [1, 6, 7, 8], "ui": [1, 6], "address": [1, 3, 6], "each": [1, 4, 6], "link": [1, 2, 6], "establish": [1, 6], "ping": [1, 6], "do": [1, 6, 9], "proce": [1, 6, 9], "until": [1, 6], "ifconfig": [1, 6], "interface_nam": [1, 6], "down": [1, 6, 9], "while": [1, 6, 9], "valid": [1, 6, 9], "execut": 1, "server": [1, 5], "s": [1, 6, 8, 9], "p": [1, 6], "_": [1, 3, 6, 8], "i": [1, 3, 6], "60": 1, "client": [1, 3, 8], "traffic": [1, 6], "tcp": [1, 4, 6], "t": [1, 6], "udp": [1, 3, 5, 6, 10], "ptp4l": [1, 6], "eth0": 1, "m": [1, 3, 6], "partner": [1, 6], "vice": 1, "versa": 1, "e2": [1, 3, 10], "f": [1, 6], "usr": [1, 6, 8], "onestep": 1, "cfg": [1, 6], "p2p": [1, 3, 10], "onestepp2p": 1, "By": [1, 5], "speed": [1, 4, 5], "autonegoti": 1, "particular": 1, "ethtool": 1, "10000": 1, "25000": 1, "autoneg": 1, "b": 1, "after": [1, 2, 9], "pleas": [1, 3, 8], "expect": [1, 5], "delai": [1, 3, 6], "2s": 1, "mrmac": [1, 2, 3, 4, 6, 8, 10], "lock": 1, "complet": [1, 3, 8], "detect": [1, 2], "If": [1, 5], "doe": [1, 3, 6, 8], "happen": 1, "immedi": 1, "try": 1, "achiev": [1, 9], "describ": [2, 3, 6], "implement": [2, 8, 9], "processor": [2, 8, 10], "cip": 2, "programm": [2, 4, 10], "logic": [2, 4, 5, 10], "top": 2, "refer": [2, 3, 4, 8], "detail": [2, 3, 6, 8], "variou": 2, "compon": 2, "illustr": 2, "subsystem": [2, 3, 4], "present": [2, 8, 10], "high": [2, 5], "perform": [2, 3], "arm": 2, "a72": 2, "On": 2, "chip": 2, "cach": 2, "memori": [2, 3, 8], "along": [2, 3], "harden": 2, "commun": 2, "peripher": [2, 4], "initi": [2, 3, 6, 8], "emploi": 2, "access": [2, 10], "2gbyte": 2, "ddr": 2, "ram": 2, "network": [2, 6, 10], "noc": [2, 3], "around": 2, "interconnect": 2, "bandwidth": 2, "between": [2, 6, 7, 10], "differ": 2, "area": 2, "transmit": [2, 3, 4, 8, 10], "stream": [2, 3, 8], "receiv": [2, 3, 4, 8, 10], "axi": [2, 3, 8], "mcdma": [2, 3, 4, 8], "via": [2, 3, 4, 8], "multi": [2, 6, 10], "media": [2, 6, 10], "end": 2, "packet": [2, 4, 5, 6, 10], "lite": 2, "quad": [2, 4], "base": [2, 3, 4], "gigabit": 2, "transceiv": 2, "gty": [2, 4], "gt": [2, 4, 7], "world": 2, "also": [2, 3, 8, 10], "outsid": 2, "direct": [2, 4, 10], "standard": [2, 8], "channel": [2, 4, 8], "facilit": 2, "transfer": [2, 4, 8, 10], "mac": [2, 3], "tx": [2, 4, 5, 10], "ptp": [2, 4, 5, 7, 11], "master": [2, 4, 6, 8], "transmiss": 2, "store": [2, 3], "timestamp": [2, 3, 4, 5], "rx": [2, 4, 10], "prepend": [2, 3, 4], "correspond": [2, 8], "One": [2, 3], "step": [2, 3, 4, 5, 7, 8, 10], "helper": [2, 3], "mode": [2, 3, 9], "normal": 2, "both": [2, 3, 8, 10], "o": [2, 3], "mm2": [2, 8], "send": [2, 3], "s2mm": [2, 8], "further": [2, 3, 9], "found": 2, "next": [2, 3, 4, 8], "licens": [2, 3, 4, 5, 7, 8, 11], "architectur": [3, 4, 6, 11], "necessari": [3, 8], "app": [3, 5, 8], "field": [3, 8], "captur": 3, "where": [3, 8], "sw": [3, 6, 8], "flag": 3, "valu": 3, "drive": 3, "1588op": 3, "oper": [3, 4, 5], "tabl": 3, "tx_ptp_1588op_in": 3, "b00": 3, "No": [3, 9], "taken": 3, "frame": 3, "modifi": 3, "b01": 3, "b10": 3, "return": 3, "addit": 3, "itself": 3, "b11": 3, "reserv": 3, "support": [3, 4, 5, 6, 7, 8, 11], "10": 3, "qualifi": [3, 8], "indic": 3, "incom": 3, "modif": 3, "sync": [3, 6], "sent": 3, "ii": 3, "fly": 3, "append": 3, "updat": 3, "iii": 3, "tag": 3, "upd": 3, "chksum": 3, "input": [3, 8], "whether": 3, "checksum": 3, "recalcul": 3, "done": 3, "ascertain": 3, "cf": 3, "offset": 3, "driven": 3, "request": [3, 10], "same": [3, 8], "respons": 3, "pdelai": 3, "t2": 3, "pdtp": 3, "fifo": 3, "read": [3, 6, 8], "iv": 3, "correct": 3, "factor": 3, "pg314": [3, 4], "multir": 3, "v1": 3, "3": [3, 6, 10], "pars": 3, "all": [3, 6, 8], "header": 3, "help": 3, "upper": [3, 8], "layer": [3, 8], "peer": 3, "two": [3, 6, 10], "64": 3, "dataword": 3, "128": 3, "80": 3, "statu": [3, 9], "word": 3, "content": [3, 11], "dw": 3, "63": [3, 6], "15": 3, "79": 3, "29": 3, "16": [3, 6, 8], "reserved30": 3, "bit31": 3, "bit63": 3, "32": 3, "featur": [3, 4, 7, 11], "over": [3, 6, 10], "ieeee": [3, 6, 10], "802": [3, 6, 10], "ipv4": [3, 5, 6, 10], "type": 3, "whenev": 3, "new": [3, 6], "multicast": 3, "destin": [3, 8], "carri": 3, "out": [3, 5], "dw1": 3, "31": 3, "30": [3, 6], "platform": [3, 4, 9, 10], "showcas": 4, "precis": [4, 6, 10], "protocol": [4, 6, 10], "solut": 4, "consist": 4, "lane": [4, 8], "enabl": [4, 8], "10g": [4, 5, 7, 8, 10], "25g": [4, 5, 7, 10], "independ": 4, "acap": 4, "hardwar": [4, 8, 10], "accommod": 4, "movement": 4, "solarflar": [4, 10], "x86": 4, "host": [4, 10], "x2522": [4, 10], "filter": 4, "auxiliari": 4, "i2c": 4, "apu": 4, "smp": 4, "stack": 4, "4x10g": [4, 10], "4x25g": [4, 6, 10], "ug1366": 4, "instal": 4, "xtp629": 4, "product": 4, "sheet": 4, "ds950": 4, "give": 5, "error": 5, "cpu": 5, "load": [5, 9], "wait": 5, "within": 5, "specifi": 5, "timeout": 5, "iperf": 5, "slightli": 5, "throughput": 5, "dhcp": 5, "broadcast": 5, "enhanc": 5, "There": [5, 6], "l2": 5, "mtu": [5, 10], "9000": [5, 10], "case": [5, 6, 8], "slave": [5, 6], "synchron": [5, 8, 10], "might": 5, "fluctuat": 5, "syncron": 6, "demonstr": [6, 10], "frequenc": 6, "physic": 6, "phc": 6, "vck": [6, 10], "190": [6, 10], "telecom": 6, "profil": 6, "anoth": 6, "itu": 6, "8275": 6, "deploi": 6, "un": [], "prepar": 6, "mani": 6, "But": 6, "alwai": 6, "formatt": 6, "cpio": [6, 9], "gz": [6, 9], "uboot": [6, 9], "repeat": 6, "5": 6, "6": 6, "renesa": [6, 8], "linkpartner_g": 6, "log": 6, "422": 6, "355": 6, "dev": 6, "ptp1": 6, "zcu670": [6, 8], "20222": 6, "home": [0, 1, 6, 9], "392": 6, "listen": 6, "init_complet": 6, "817": 6, "announce_receipt_timeout_expir": 6, "9a11bc": 6, "fffe": 6, "62d209": 6, "best": 6, "grand": [6, 8], "role": 6, "ts2phc": [6, 8], "clockmatrix": 6, "timer": [6, 8], "syncer": [6, 8], "background": 6, "ptp0": 6, "ptp_pin_setfunc2": 6, "fail": 6, "invalid": 6, "argument": 6, "521": 6, "912": 6, "pin": 6, "continu": 6, "brave": 6, "ignor": 6, "becaus": 6, "dynam": [6, 7], "setfunc": 6, "adjust": [6, 8], "quick": [6, 8, 11], "manual": [6, 8], "l": 6, "ensur": 6, "instanc": 6, "q": 6, "standalone_g": 6, "530": 6, "543": 6, "546": 6, "line": 6, "attach": 6, "588": 6, "673": 6, "foreign": 6, "923": 6, "uncalibr": 6, "rs_slave": 6, "531": 6, "303": 6, "master_clock_select": 6, "990": 6, "rm": 6, "937470829990502912": 6, "max": 6, "1676998802225530368": 6, "freq": 6, "63277": 6, "59892814365198016": 6, "215946613225567776": 6, "532": 6, "991": 6, "2629": 6, "3787": 6, "5008": 6, "3793": 6, "167": 6, "94": 6, "533": 6, "3208": 6, "3803": 6, "2030": 6, "660": 6, "52": 6, "19": 6, "534": 6, "1209": 6, "2025": 6, "1957": 6, "389": 6, "17": 6, "535": 6, "169": 6, "270": 6, "687": 6, "290": 6, "66": 6, "536": 6, "992": 6, "226": 6, "255": 6, "112": 6, "74": 6, "537": 6, "99": 6, "159": 6, "78": 6, "23": 6, "75": 6, "538": 6, "13": 6, "166": 6, "22": 6, "539": 6, "993": 6, "18": 6, "211": 6, "73": 6, "540": 6, "12": 6, "217": 6, "541": 6, "51": 6, "befor": 6, "kill": 6, "creat": 6, "bsp": 6, "compris": 6, "fsbl": 6, "pmu": 6, "firmwar": 6, "about": 6, "pp": 6, "known": [7, 10], "issu": [7, 10], "plain": 7, "upgrad": [7, 9], "refclk": 7, "switch": [7, 10], "ad": 7, "four": 8, "descriptor": 8, "them": 8, "interrupt": 8, "dma": 8, "wiki": 8, "atlassian": 8, "space": 8, "18842485": 8, "1588": [8, 11], "1pp": 8, "8a34001": 8, "regist": 8, "event": 8, "so": 8, "handler": 8, "capabl": 8, "clock": 8, "phase": [8, 11], "linuxptp": 8, "share": 8, "band": 8, "metadata": 8, "per": 8, "queu": 8, "app2": 8, "upon": 8, "action": 8, "pass": 8, "ts": 8, "higher": 8, "byte": 8, "datastream": 8, "discard": 8, "dummi": 8, "precursor": 8, "non": 8, "makefil": 9, "synthesi": 9, "comment": 9, "tab": 9, "part": 9, "search": 9, "xcvm1802": 9, "vsva2197": 9, "2mp": 9, "look": 9, "like": 9, "ok": 9, "popup": 9, "report": 9, "list": 9, "xsa": 9, "boot": 9, "psm": 9, "plm": 9, "add": 9, "0x00200000": 9, "0x04000000": 9, "0x20000000": 9, "forc": 9, "mention": 9, "fpga": 10, "1500": 10, "test": 10, "overview": 10, "acchitectur": 10, "revis": 10, "histori": 10, "ieee": 10, "track": 10, "bug": 10, "question": 10, "forum": 10, "synron": 11, "vmk180": 11}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"trd": [0, 6, 9, 10, 11], "packag": [0, 6, 9, 10], "access": [0, 6, 9], "tutori": [0, 6, 9, 10], "refer": [0, 1, 6, 9], "file": [0, 6, 9], "structur": [0, 6], "build": [0, 6, 9], "flow": [0, 6], "prerequisit": [0, 1, 6, 9], "To": [0, 6], "top": [0, 6], "makefil": [0, 6], "hardwar": [0, 2, 3, 6, 9], "platform": [0, 2, 6, 8], "xsa": [0, 6], "modifi": 0, "design": [0, 4, 9], "creat": 0, "new": 0, "petalinux": [0, 6, 9], "imag": [0, 6, 9], "configur": 0, "project": 0, "manual": 0, "next": [0, 1, 6, 9], "step": [0, 1, 6, 9], "licens": [0, 1, 6, 9, 10], "set": 1, "up": 1, "board": [1, 9, 10], "applic": [1, 6], "deploy": [1, 6], "introduct": [1, 2, 4, 8], "setup": [1, 6], "flash": [1, 6], "sd": [1, 6], "card": [1, 6], "partit": 1, "boot": [1, 6], "mode": [1, 6], "gt": [1, 6], "clock": [1, 6], "run": [1, 6], "host": [1, 6], "vck190": [1, 6, 11], "iperf": 1, "command": [1, 6], "ptp": [1, 3, 6, 8, 10], "two": 1, "One": 1, "dynam": 1, "switch": 1, "between": 1, "10g": 1, "25g": 1, "architectur": [2, 8, 10], "resourc": 2, "util": 2, "acchitectur": 3, "packet": [3, 8], "processor": 3, "tx": 3, "hw": 3, "master": 3, "ip": 3, "rx": 3, "detect": 3, "logic": 3, "overview": 4, "compon": 4, "known": 5, "issu": 5, "ieee": 6, "1588": [6, 10], "phase": [6, 10], "synchron": 6, "featur": [6, 10], "test": 6, "revis": 7, "histori": 7, "2022": 7, "2": 7, "releas": 7, "1": 7, "2021": 7, "softwar": 8, "timestamp": 8, "handl": 8, "pl": 8, "base": 8, "process": 8, "solut": 8, "vmk180": [9, 10], "ethernet": [10, 11], "quick": 10, "start": 10, "document": [10, 11], "other": 10, "synron": 10, "port": 10, "xilinx": 10, "support": 10}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.todo": 2, "sphinx.ext.viewcode": 1, "sphinx": 56}})