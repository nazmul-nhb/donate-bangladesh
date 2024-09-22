import "./style.css";
import { calculateDonation } from "./utilities/calculateDonation";
import { getElementByID } from "./utilities/getElements";
import { toggleButtonState, toggleTabs } from "./utilities/togglers";

export const balanceContainer = getElementByID("balance");
const donateButton = getElementByID("donation-btn");
const historyButton = getElementByID("history-btn");
const donateTab = getElementByID("donate-tab");
const historyTab = getElementByID("history-tab");

const noakhaliButton = getElementByID("noakhali-button");

export let currentBalance:number = 100000;

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
	// Make history button active
	toggleButtonState(historyButton, donateButton);
};

donateButton?.addEventListener("click", handleDonationClick);
historyButton?.addEventListener("click", handleHistoryClick);

const handleDonation = (e: MouseEvent) => {
	e.preventDefault();
	calculateDonation("noakhali-amount", "noakhali-input")
};

noakhaliButton?.addEventListener("click", handleDonation);
