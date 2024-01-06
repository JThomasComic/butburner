/** @param {NS} ns */
export async function main(ns) {

    // Defines the "target server", which is the server
    // that we're going to hack. In this case, it's "CSEC"
    const target = "CSEC";

    // If we have the BruteSSH.exe program, use it to open the SSH Port
    // on the target server
    if (ns.fileExists("BruteSSH.exe", "home")) {
        ns.brutessh(target);
    }

    // Get root access to target server
    ns.nuke(target);
}
