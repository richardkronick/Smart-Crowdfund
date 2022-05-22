// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum, string memory name, string memory description, string memory imageUrl) public {
        Campaign newCampaign = new Campaign(minimum, msg.sender, name, description, imageUrl);
        deployedCampaigns.push(address(newCampaign));
    }

    function getDeployedCampaigns() public view returns (address[] memory){
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    string public campaignName;
    string public campaignDescription;
    string public campaignImageUrl;

    modifier requireManager(){
        require(msg.sender == manager);
        _;
    }
    
    constructor(uint minimum, address creator, string memory name, string memory description, string memory imageUrl) {
        minimumContribution = minimum;
        manager = creator;
        campaignName = name;
        campaignDescription = description;
        campaignImageUrl = imageUrl;
    }

    function contribute() public payable{
        require(msg.value > minimumContribution);

        if (!approvers[msg.sender]){
            approvers[msg.sender] = true;

            approversCount++;
        }
    }

    function createRequest(string memory description, uint value, address recipient) public requireManager {
        Request storage newRequest = requests.push();
        newRequest.description = description;
        newRequest.value = value;
        newRequest.recipient = recipient;
        newRequest.complete = false;
        newRequest.approvalCount = 0;
    }

    function approveRequest(uint indexOfRequest) public {
        confirmRequestExists(indexOfRequest);

        Request storage request = requests[indexOfRequest];

        // Confirm that the sender is an approver.
        require(approvers[msg.sender]);

        // Confirm the sender has not already approved this request.
        require(!request.approvals[msg.sender]);

        // Add them as an approval.
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint indexOfRequest) public requireManager {
        confirmRequestExists(indexOfRequest);

        Request storage request = requests[indexOfRequest];

        // Confirm that over 50% of approvers have voted in favor of this request.
        require(request.approvalCount > (approversCount / 2));

        // Confirm that this request has not already been completed.
        require(!request.complete);

        // Transfer the request value to the recipient and mark this request as complete.
        payable(request.recipient).transfer(request.value);
        request.complete = true;
    }

    function getCampaignCurrentValue() public view returns (uint) {
        return address(this).balance;
    }

    function getSummary() public view returns (uint, uint, uint, uint, address, string memory, string memory, string memory) {
        return (
            minimumContribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager,
            campaignName,
            campaignDescription,
            campaignImageUrl
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }

    function confirmRequestExists(uint indexOfRequest) private view {
        // Make sure the request exists
        require(requests.length > 0);
        require(indexOfRequest <= requests.length - 1);
    }
}