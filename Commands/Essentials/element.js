const pTable = require("ptable"); 
const npt = require("node-periodic-table");


module.exports = {
    name: "element",
    alias: ["elementinfo"],
    desc: "To get info of an element from priodic table", 
    usage: "element br",
    react: "đ",
    category: "Essentials",
    start: async(Miku, m,{pushName,prefix,args,text}) => {
        if(!args[0]) return m.reply(`Please use this command like this: ${prefix}element br`);
        const query = args.join(" ");
       const search = await pTable(query);
       if (search === undefined) return m.reply(`Please provide me a valid element by visiting here !\n\nhttps://en.m.wikipedia.org/wiki/Periodic_table`);

       const response = await npt.getByNumber(search.number);
       let caption  = "";
        caption = "              *ã  Element Details  ã*\n\n";
        caption += `đ´ *Elelment:* ${response.name}\n`;
		caption += `âŦ *Atomic Number:* ${response.number}\n`;
		caption += `đĄ *Atomic Mass:* ${response.atomic_mass}\n`;
		caption += `âŦ *Symbol:* ${response.symbol}\n`;
		caption += `â *Appearance:* ${response.apearance}\n`;
		caption += `đĸ *Phase:* ${response.phase}\n`;
		caption += `â¨ī¸ *Boiling Point:* ${response.boil} K\nī¸`;
		caption += `đ§ *Melting Point:* ${response.melt} K\n`;
		caption += `đŖ *Density:* ${response.density} g/mL\n`;
		caption += `âĢ *Shells:* ${response.shells.join(", ")}\n`;
		caption += `đ *URL:* ${response.source}\n\n`;
		caption += `đŦ *Summary:* ${response.summary}\n`;
        await Miku.sendMessage(m.from,  {image: {url: botImage1},caption: caption}, {quoted: m });
    }
}