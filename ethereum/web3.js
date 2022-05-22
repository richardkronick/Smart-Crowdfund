import Web3 from "web3";
 
let web3;

//  && window.ethereum.networkVersion === '4' *************************************************

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and the user has the MetaMask extension.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the Next.js server or the user does not have MetaMask.
  // Please replace provider url with your own.
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/a570e084d3d346559c59552c8e7a19a2"
  );
  web3 = new Web3(provider);
}
 
export default web3;