let handler = (m, { text }) => {
  
  m.reply(`
*γ BANTUAN BOT γ*


πSelamat datang di bot dimas, mari saya jelaskan penggunaan fitur adventure bot ini!!


βΉοΈ Adventure Bantuan Commands:

β #inv , #tas = melihat semua item
β #shop = tempat jual item
β #toko = tempat jual hewan
β #buy <item> <total> = beli item
β #sell <item> <total> = jual item
β #use , #pakai = memakai item

β #peliharaan
β #kolam
β #kandang
β #dompet

β #pekerjaan
β #mancing
β #adventure
β #nambang
β #berburu

Dan masih banyak lagi... nantikan saja update nya di bot ini!!
akan ada fitur menarik di bot ini!!



`)
}
handler.help = ['ahelp']
handler.tags = ['info']
handler.command = ['ahelp']

module.exports = handler
