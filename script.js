document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const content = document.getElementById('content');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const tool = event.target.getAttribute('data-tool');
            loadToolContent(tool);
        });
    });

    async function loadToolContent(tool) {
        let toolContent = '';
        switch(tool) {
            case 'ip':
                const ipData = await fetch('https://api.ipify.org?format=json').then(response => response.json());
                toolContent = `<h2>IP Tool</h2><p>Your IP Address is: ${ipData.ip}</p>`;
                break;
            case 'whois':
                toolContent = `<h2>Whois Tool</h2>
                               <form id="whoisForm">
                                   <label for="whoisAddress">Enter a domain to look up:</label>
                                   <input type="text" id="whoisAddress" name="whoisAddress">
                                   <button type="submit">Look Up</button>
                               </form>
                               <div id="whoisResult"></div>`;
                break;
            case 'ping':
                toolContent = `<h2>Ping Tool</h2>
                               <form id="pingForm">
                                   <label for="pingAddress">Enter an address to ping:</label>
                                   <input type="text" id="pingAddress" name="pingAddress">
                                   <button type="submit">Ping</button>
                               </form>
                               <div id="pingResult"></div>`;
                break;
            case 'traceroute':
                toolContent = `<h2>Traceroute Tool</h2>
                               <form id="tracerouteForm">
                                   <label for="tracerouteAddress">Enter an address to traceroute:</label>
                                   <input type="text" id="tracerouteAddress" name="tracerouteAddress">
                                   <button type="submit">Traceroute</button>
                               </form>
                               <div id="tracerouteResult"></div>`;
                break;
            case 'wifi-analyzer':
                toolContent = '<h2>WiFi Analyzer Tool</h2><p>Content for WiFi Analyzer Tool</p>';
                break;
            case 'port-scanner':
                toolContent = `<h2>Port Scanner Tool</h2>
                               <form id="portScannerForm">
                                   <label for="portScannerAddress">Enter an address to scan:</label>
                                   <input type="text" id="portScannerAddress" name="portScannerAddress">
                                   <button type="submit">Scan</button>
                               </form>
                               <div id="portScannerResult"></div>`;
                break;
            case 'lan-scanner':
                toolContent = `<h2>LAN Scanner Tool</h2>
                               <form id="lanScannerForm">
                                   <label for="lanAddress">Enter a network address to scan:</label>
                                   <input type="text" id="lanAddress" name="lanAddress" placeholder="e.g., 192.168.1.0/24">
                                   <button type="submit">Scan</button>
                               </form>
                               <div id="lanScannerResult"></div>`;
                break;
            case 'dns-lookup':
                toolContent = `<h2>DNS Lookup Tool</h2>
                               <form id="dnsLookupForm">
                                   <label for="dnsLookupAddress">Enter a domain to look up:</label>
                                   <input type="text" id="dnsLookupAddress" name="dnsLookupAddress">
                                   <button type="submit">Look Up</button>
                               </form>
                               <div id="dnsLookupResult"></div>`;
                break;
            case 'ip-calculator':
                toolContent = `<h2>IP Calculator Tool</h2>
                               <form id="ipCalculatorForm">
                                   <label for="ipCalculatorAddress">Enter an IP address to calculate:</label>
                                   <input type="text" id="ipCalculatorAddress" name="ipCalculatorAddress">
                                   <button type="submit">Calculate</button>
                               </form>
                               <div id="ipCalculatorResult"></div>`;
                break;
            case 'ip-host-converter':
                toolContent = `<h2>IP & Host Converter Tool</h2>
                               <form id="ipHostConverterForm">
                                   <label for="ipHostConverterAddress">Enter an IP or hostname to convert:</label>
                                   <input type="text" id="ipHostConverterAddress" name="ipHostConverterAddress">
                                   <button type="submit">Convert</button>
                               </form>
                               <div id="ipHostConverterResult"></div>`;
                break;
            case 'settings':
                toolContent = '<h2>Settings</h2><p>Content for Settings</p>';
                break;
            default:
                toolContent = '<h1>Welcome to Our Tools</h1><p>Select a tool from the menu.</p>';
        }
        content.innerHTML = toolContent;

        if (tool === 'ping') {
            document.getElementById('pingForm').addEventListener('submit', async (event) => {
                event.preventDefault();
                const address = document.getElementById('pingAddress').value;
                const pingResult = document.getElementById('pingResult');
                pingResult.innerHTML = `Pinging ${address}...`;

                // Simulate a ping response
                setTimeout(() => {
                    pingResult.innerHTML = `Ping to ${address} was successful.`;
                }, 1000);
            });
        }

        if (tool === 'lan-scanner') {
            document.getElementById('lanScannerForm').addEventListener('submit', async (event) => {
                event.preventDefault();
                const address = document.getElementById('lanAddress').value;
                const lanScannerResult = document.getElementById('lanScannerResult');
                lanScannerResult.innerHTML = `Scanning network ${address}...`;

                // Simulate a LAN scan response
                setTimeout(() => {
                    lanScannerResult.innerHTML = `
                        <h3>Scan Results for ${address}:</h3>
                        <ul>
                            <li>Device 1: 192.168.1.2</li>
                            <li>Device 2: 192.168.1.3</li>
                            <li>Device 3: 192.168.1.4</li>
                        </ul>`;
                }, 2000);
            });
        }

        if (tool === 'whois') {
            document.getElementById('whoisForm').addEventListener('submit', async (event) => {
                event.preventDefault();
                const address = document.getElementById('whoisAddress').value;
                const whoisResult = document.getElementById('whoisResult');
                whoisResult.innerHTML = `Looking up ${address}...`;

                // Simulate a whois response
                setTimeout(() => {
                    whoisResult.innerHTML = `
                        <h3>Whois data for ${address}:</h3>
                        <p>Domain Name: ${address}</p>
                        <p>Registrar: Example Registrar</p>
                        <p>Creation Date: 01-Jan-2000</p>
                        <p>Expiration Date: 01-Jan-2030</p>
                        <p>Nameservers: ns1.example.com, ns2.example.com</p>`;
                }, 1500);
            });
        }

        if (tool === 'traceroute') {
            document.getElementById('tracerouteForm').addEventListener('submit', async (event) => {
                event.preventDefault();
                const address = document.getElementById('tracerouteAddress').value;
                const tracerouteResult = document.getElementById('tracerouteResult');
                tracerouteResult.innerHTML = `Tracerouting ${address}...`;

                // Simulate a traceroute response
                setTimeout(() => {
                    tracerouteResult.innerHTML = `
                        <h3>Traceroute to ${address}:</h3>
                        <ul>
                            <li>Hop 1: 192.168.1.1</li>
                            <li>Hop 2: 10.0.0.1</li>
                            <li>Hop 3: 172.16.0.1</li>
                            <li>Hop 4: ${address}</li>
                        </ul>`;
                }, 2000);
            });
        }

        if (tool === 'port-scanner') {
            document.getElementById('portScannerForm').addEventListener('submit', async (event) => {
                event.preventDefault();
                const address = document.getElementById('portScannerAddress').value;
                const portScannerResult = document.getElementById('portScannerResult');
                portScannerResult.innerHTML = `Scanning ports on ${address}...`;

                // Simulate a port scan response
                setTimeout(() => {
                    portScannerResult.innerHTML = `
                        <h3>Port scan results for ${address}:</h3>
                        <ul>
                            <li>Port 22: Open</li>
                            <li>Port 80: Open</li>
                            <li>Port 443: Open</li>
                            <li>Port 8080: Closed</li>
                        </ul>`;
                }, 2500);
            });
        }

        if (tool === 'dns-lookup') {
            document.getElementById('dnsLookupForm').addEventListener('submit', async (event) => {
                event.preventDefault();
                const address = document.getElementById('dnsLookupAddress').value;
                const dnsLookupResult = document.getElementById('dnsLookupResult');
                dnsLookupResult.innerHTML = `Looking up DNS for ${address}...`;

                // Simulate a DNS lookup response
                setTimeout(() => {
                    dnsLookupResult.innerHTML = `
                        <h3>DNS Lookup for ${address}:</h3>
                        <p>A Record: 93.184.216.34</p>
                        <p>MX Record: mail.example.com</p>
                        <p>NS Record: ns1.example.com, ns2.example.com</p>`;
                }, 1500);
            });
        }

        if (tool === 'ip-calculator') {
            document.getElementById('ipCalculatorForm').addEventListener('submit', async (event) => {
                event.preventDefault();
                const address = document.getElementById('ipCalculatorAddress').value;
                const ipCalculatorResult = document.getElementById('ipCalculatorResult');
                ipCalculatorResult.innerHTML = `Calculating IP details for ${address}...`;

                // Simulate an IP calculator response
                setTimeout(() => {
                    ipCalculatorResult.innerHTML = `
                        <h3>IP Calculation for ${address}:</h3>
                        <p>Network Address: 192.168.1.0</p>
                        <p>Broadcast Address: 192.168.1.255</p>
                        <p>Subnet Mask: 255.255.255.0</p>
                        <p>Number of Hosts: 254</p>`;
                }, 1000);
            });
        }

        if (tool === 'ip-host-converter') {
            document.getElementById('ipHostConverterForm').addEventListener('submit', async (event) => {
                event.preventDefault();
                const address = document.getElementById('ipHostConverterAddress').value;
                const ipHostConverterResult = document.getElementById('ipHostConverterResult');
                ipHostConverterResult.innerHTML = `Converting ${address}...`;

                // Simulate an IP/Host conversion response
                setTimeout(() => {
                    ipHostConverterResult.innerHTML = `
                        <h3>Conversion results for ${address}:</h3>
                        <p>Converted IP/Hostname: ${address}</p>`;
                }, 1000);
            });
        }
    }
});
