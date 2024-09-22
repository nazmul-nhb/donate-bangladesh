import "./style.css";
import { getElementByID } from "./utilities/getElements";

const balanceContainer = getElementByID("balance");
let initialBalance = 100000;
balanceContainer
	? (balanceContainer.innerText = initialBalance.toString())
	: null;
