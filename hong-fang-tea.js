/** @param {NS} ns */
export async function main(ns) {

    // Defines the "target server", which is the server
    // that we're going to hack. In this case, it's "hong-fang-tea"
    const target = "hong-fang-tea";

    // Get root access to target server
    ns.nuke(target);

    // Defines how much money a server should have before we hack it
    // In this case, it is set to the maximum amount of money.
    const moneyThresh = ns.getServerMaxMoney(target);

    // Defines the maximum security level the target server can
    // have. If the target's security level is higher than this,
    // we'll weaken it before doing anything else
    const securityThresh = ns.getServerMinSecurityLevel(target);

    // Infinite loop that continously hacks/grows/weakens the target server
    while(true) {
        if (ns.getServerMoneyAvailable(target) < moneyThresh) {
            // If the server's money is less than our threshold, grow it
            await ns.grow(target);
        } else if (ns.getServerSecurityLevel(target) > securityThresh) {
            // If the server's security level is above our threshold, weaken it
            await ns.weaken(target);
        } else {
            // Otherwise, hack it
            await ns.hack(target);
        }
    }
}
