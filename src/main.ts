import "./style.css";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { getElementByID } from "./utilities/getElements";
import { getCurrentBalance } from "./utilities/localStorage";
import { calculateDonation } from "./utilities/calculateDonation";
import { toggleButtonState, toggleTabs } from "./utilities/togglers";
import { displayDonationHistory } from "./utilities/displayHistory";
import { displaySpecificDonationAmount } from "./utilities/displayDonationAmount";

export const balanceContainer = getElementByID("balance");

const donateButton = getElementByID("donation-btn");
const historyButton = getElementByID("history-btn");
const donateTab = getElementByID("donate-tab");
const historyTab = getElementByID("history-tab");

const noakhaliButton = getElementByID("noakhali-button");
const feniButton = getElementByID("feni-button");
const quotaButton = getElementByID("quota-button");

export let currentBalance: number = getCurrentBalance() || 100000;

if (balanceContainer) {
	balanceContainer.innerText = currentBalance.toString();
}

const handleDonationClick = (e: MouseEvent) => {
	e.preventDefault();
	// Show donation tab, hide history tab
	toggleTabs(donateTab, historyTab);
	// Make donation button active
	toggleButtonState(donateButton, historyButton);
};

const handleHistoryClick = (e: MouseEvent) => {
	e.preventDefault();
	// Show history tab, hide donation tab
	toggleTabs(historyTab, donateTab);
	// Display Donation History
	displayDonationHistory();
	// Make history button active
	toggleButtonState(historyButton, donateButton);
};

donateButton?.addEventListener("click", handleDonationClick);
historyButton?.addEventListener("click", handleHistoryClick);

// Handle Donations
const handleNoakhaliDonation = (e: MouseEvent) => {
	e.preventDefault();
	calculateDonation("noakhali-amount", "noakhali-input", "noakhali-title");
};

noakhaliButton?.addEventListener("click", handleNoakhaliDonation);

const handleFeniDonation = (e: MouseEvent) => {
	e.preventDefault();
	calculateDonation("feni-amount", "feni-input", "feni-title");
};

feniButton?.addEventListener("click", handleFeniDonation);

const handleQuotaDonation = (e: MouseEvent) => {
	e.preventDefault();
	calculateDonation("quota-amount", "quota-input", "quota-title");
};

quotaButton?.addEventListener("click", handleQuotaDonation);

// Display all the donation amount for each campaign
displaySpecificDonationAmount("noakhali-amount");
displaySpecificDonationAmount("feni-amount");
displaySpecificDonationAmount("quota-amount");

// toast options
toastr.options = {
	closeButton: true,
	progressBar: true,
	positionClass: "toast-bottom-right",
	preventDuplicates: true,
	showEasing: "swing",
	hideEasing: "linear",
	showMethod: "fadeIn",
	hideMethod: "fadeOut",
};
