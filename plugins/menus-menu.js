import fetch from 'node-fetch';


// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.


const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu
    // const pp = imagen7;

    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const { money, joincount } = global.db.data.users[m.sender];
    const { exp, limit, level, role } = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `${tradutor.texto1[0]}

${tradutor.texto1[1]} ${taguser}

${tradutor.texto1[2]}

${tradutor.texto1[3]} ${level}
${tradutor.texto1[4]} ${exp}
${tradutor.texto1[5]} ${role}
${tradutor.texto1[6]} ${limit}
${tradutor.texto1[7]} ${money}
${tradutor.texto1[8]} ${joincount}
${tradutor.texto1[9]} ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
 ${readMore}

 ${tradutor.texto1[10]}
  
  ▢ _${usedPrefix}menuaudios_
  ▢ _${usedPrefix}menuanimes_
  ▢ _${usedPrefix}labiblia_ (🔞)
  ▢ _${usedPrefix}lang_ ${tradutor.texto2}
  ▢ _${usedPrefix}langgroup_ ${tradutor.texto3}
  ▢ _${usedPrefix}glx_ ${tradutor.texto4 /** Este menú permanecerá aquí por un corto tiempo, hasta que la gente sepa */}

 


  ${tradutor.texto1[12]}

  
  ▢ _${usedPrefix}включить restrict_
  ▢ _${usedPrefix}выключить restrict_
  ▢ _${usedPrefix}включить autoread_
  ▢ _${usedPrefix}выключить autoread_
  ▢ _${usedPrefix}включить antispam_
  ▢ _${usedPrefix}выключить antispam_
  ▢ _${usedPrefix}включить anticall_
  ▢ _${usedPrefix}выключить anticall_
  ▢ _${usedPrefix}включить modoia_
  ▢ _${usedPrefix}выключить modoia_
  ▢ _${usedPrefix}включить audios_bot_
  ▢ _${usedPrefix}выключить audios_bot_
  ▢ _${usedPrefix}включить antiprivado_
  ▢ _${usedPrefix}выключить antiprivado_
  

  ${tradutor.texto1[13]}

  ▢ _${usedPrefix}fake *<txt1> <@tag> <txt2>*_
  ▢ _${usedPrefix}prostituto *<nombre / @tag>*_
  ▢ _${usedPrefix}gay2 *<nombre / @tag>*_
  ▢ _${usedPrefix}lesbiana *<nombre / @tag>*_
  ▢ _${usedPrefix}pajero *<nombre / @tag>*_
  ▢ _${usedPrefix}puto *<nombre / @tag>*_
  ▢ _${usedPrefix}manco *<nombre / @tag>*_
  ▢ _${usedPrefix}rata *<nombre / @tag>*_
  ▢ _${usedPrefix}love *<nombre / @tag>*_
  ▢ _${usedPrefix}doxear *<nombre / @tag>*_
  ▢ _${usedPrefix}pregunta *<txt>*_
  ▢ _${usedPrefix}suitpvp *<@tag>*_
  ▢ _${usedPrefix}topgays_
  ▢ _${usedPrefix}formarpareja_
  ▢ _${usedPrefix}reto_
  ▢ _${usedPrefix}cancion_
  ▢ _${usedPrefix}pista_
  ▢ _${usedPrefix}akinator_
  ▢ _${usedPrefix}ruleta
  ▢ _${usedPrefix}suerte
  ▢ _${usedPrefix}wordfind_
  ▢ _${usedPrefix}glx_ (RPG Mundo)



  ${tradutor.texto1[14]}

  ▢ _${usedPrefix}включить *welcome*_
  ▢ _${usedPrefix}выключить *welcome*_
  ▢ _${usedPrefix}включить *modohorny*_
  ▢ _${usedPrefix}выключить *modohorny*_
  ▢ _${usedPrefix}включить *antilink*_
  ▢ _${usedPrefix}выключить *antilink*_
  ▢ _${usedPrefix}включить *antilink2*_
  ▢ _${usedPrefix}выключить *antilink2*_
  ▢ _${usedPrefix}включить *detect*_
  ▢ _${usedPrefix}выключить *detect*_
  ▢ _${usedPrefix}включить *audios*_
  ▢ _${usedPrefix}выключить *audios*_
  ▢ _${usedPrefix}включить *autosticker*_
  ▢ _${usedPrefix}выключить *autosticker*_
  ▢ _${usedPrefix}включить *antiviewonce*_
  ▢ _${usedPrefix}выключить *antiviewonce*_
  ▢ _${usedPrefix}включить *antitoxic*_
  ▢ _${usedPrefix}выключить *antitoxic*_
  ▢ _${usedPrefix}включить *antitraba*_
  ▢ _${usedPrefix}выключить *antitraba*_
  ▢ _${usedPrefix}включить *antiarabes*_
  ▢ _${usedPrefix}выключить *antiarabes*_
  ▢ _${usedPrefix}включить *modoadmin*_
  ▢ _${usedPrefix}выключить *modoadmin*_
  ▢ _${usedPrefix}включить *antidelete*_
  ▢ _${usedPrefix}выключить *antidelete*_


  ${tradutor.texto1[15]}

 ▢ _${usedPrefix}play *<txt>*_
 ▢ _${usedPrefix}play2 *<txt>*_
 ▢ _${usedPrefix}play.1 *<txt>*_
 ▢ _${usedPrefix}play.2 *<txt>*_
 ▢ _${usedPrefix}tiktok *<url>*_
 ▢ _${usedPrefix}tiktokimg *<url>*_
 ▢ _${usedPrefix}pptiktok *<usr>*_
 ▢ _${usedPrefix}wallpaper *<txt>*_ 
 ▢ _${usedPrefix}dapk2 *<url>*_
 ▢ _${usedPrefix}xnxxdl *<url>*_ (🔞)
 ▢ _${usedPrefix}xvideosdl *<url>*_ (🔞)


 ${tradutor.texto1[16]}

 
  
  ▢ _${usedPrefix}modapk *<txt>*_
  ▢ _${usedPrefix}xnxxsearch *<txt>*_
  ▢ _${usedPrefix}google *<txt>*_
  ▢ _${usedPrefix}wikipedia *<txt>*_
  ▢ _${usedPrefix}ytsearch *<txt>*_


  ${tradutor.texto1[17]}

  ▢ _${usedPrefix}add *num>*_
  ▢ _${usedPrefix}kick *<@tag>*_
  ▢ _${usedPrefix}kick2 *<@tag>*_
  ▢ _${usedPrefix}listanum *<txt>*_
  ▢ _${usedPrefix}kicknum *<txt>*_
  ▢ _${usedPrefix}grupo *<abrir/cerrar>*_
  ▢ _${usedPrefix}grouptime  ${tradutor.texto1[30]}
  ▢ _${usedPrefix}promote *<@tag>*_
  ▢ _${usedPrefix}demote *<@tag>*_
  ▢ _${usedPrefix}infogroup_
  ▢ _${usedPrefix}resetlink_
  ▢ _${usedPrefix}link_
  ▢ _${usedPrefix}setname *<txt>*_
  ▢ _${usedPrefix}setdesc *<txt>*_
  ▢ _${usedPrefix}invocar *<txt>*_
  ▢ _${usedPrefix}setwelcome *<txt>*_
  ▢ _${usedPrefix}setbye *<txt>*_
  ▢ _${usedPrefix}hidetag *<txt>*_
  ▢ _${usedPrefix}hidetag *<audio>*_
  ▢ _${usedPrefix}hidetag *<video>*_
  ▢ _${usedPrefix}hidetag *<img>*_
  ▢ _${usedPrefix}warn *<@tag>*_
  ▢ _${usedPrefix}unwarn *<@tag>*_
  ▢ _${usedPrefix}listwarn_
  ▢ _${usedPrefix}fantasmas_
  ▢ _${usedPrefix}destraba_
  ▢ _${usedPrefix}setpp *<img>*_
  ▢ _admins *<txt>*_ ${tradutor.texto1[31]}


  ${tradutor.texto1[18]}

  ▢ _${usedPrefix}toanime *<img>*_
  ▢ _${usedPrefix}togifaud *<video>*_
  ▢ _${usedPrefix}toimg *<sticker>*_
  ▢ _${usedPrefix}tomp3 *<video>*_
  ▢ _${usedPrefix}toptt *<video / audio>*_
  ▢ _${usedPrefix}tovideo *<sticker>*_
  ▢ _${usedPrefix}tourl *<video / img / audio>*_


  ${tradutor.texto1[20]}

  ▢ _${usedPrefix}piropo_
  ▢ _${usedPrefix}consejo_
  ▢ _${usedPrefix}fraseromantica_
  ▢ _${usedPrefix}historiaromantica_


  ${tradutor.texto1[21]}

  ▢ _${usedPrefix}kpop *<blackpink/exo/bts>*_
  ▢ _${usedPrefix}cristianoronaldo_
  ▢ _${usedPrefix}messi_
  ▢ _${usedPrefix}cat_
  ▢ _${usedPrefix}dog_
  ▢ _${usedPrefix}meme_
  ▢ _${usedPrefix}itzy_
  ▢ _${usedPrefix}blackpink_
  ▢ _${usedPrefix}navidad_
  ▢ _${usedPrefix}wpmontaña_
  ▢ _${usedPrefix}pubg_
  ▢ _${usedPrefix}wpgaming_
  ▢ _${usedPrefix}wpaesthetic_
  ▢ _${usedPrefix}wpaesthetic2_
  ▢ _${usedPrefix}wprandom_
  ▢ _${usedPrefix}wallhp_
  ▢ _${usedPrefix}wpvehiculo_
  ▢ _${usedPrefix}wpmoto_
  ▢ _${usedPrefix}coffee_
  ▢ _${usedPrefix}pentol_
  ▢ _${usedPrefix}caricatura_
  ▢ _${usedPrefix}ciberespacio_
  ▢ _${usedPrefix}technology_
  ▢ _${usedPrefix}doraemon_
  ▢ _${usedPrefix}hacker_
  ▢ _${usedPrefix}planeta_
  ▢ _${usedPrefix}randomprofile_


  ${tradutor.texto1[25]}
 
  ▢ _${usedPrefix}inspect *<wagc_url>*_
  ▢ _${usedPrefix}chatgpt *<txt>*_
  ▢ _${usedPrefix}delchatgpt
  ▢ _${usedPrefix}gptvoz *<txt>*_
  ▢ _${usedPrefix}dall-e *<txt>*_
  ▢ _${usedPrefix}spamwa *num|txt|cant>*_
  ▢ _${usedPrefix}readviewonce *<img / video>*_
  ▢ _${usedPrefix}encuesta *<txt1|txt2>*_
  ▢ _${usedPrefix}afk *<motivo>*_
  ▢ _${usedPrefix}ocr *<responde a img>*_
  ▢ _${usedPrefix}hd *<responde a img>*_
  ▢ _${usedPrefix}del *<msj>*_
  ▢ _${usedPrefix}whatmusic *<audio>*_
  ▢ _${usedPrefix}readqr *<img>*_
  ▢ _${usedPrefix}qrcode *<txt>*_
  ▢ _${usedPrefix}readmore *<txt1|txt2>*_
  ▢ _${usedPrefix}styletext *<txt>*_
  ▢ _${usedPrefix}traducir *<txt>*_
   ▢ _${usedPrefix}img *<txt>*_


  ${tradutor.texto1[26]}

  ▢ _${usedPrefix}adventure_
  ▢ _${usedPrefix}cazar_
  ▢ _${usedPrefix}cofre_
  ▢ _${usedPrefix}balance_
  ▢ _${usedPrefix}claim_
  ▢ _${usedPrefix}heal_
  ▢ _${usedPrefix}lb_
  ▢ _${usedPrefix}levelup_
  ▢ _${usedPrefix}myns_
  ▢ _${usedPrefix}perfil_
  ▢ _${usedPrefix}work_
  ▢ _${usedPrefix}minar_
  ▢ _${usedPrefix}minar2_
  ▢ _${usedPrefix}buy_
  ▢ _${usedPrefix}buyall_
  ▢ _${usedPrefix}verificar_
  ▢ _${usedPrefix}robar *<cant> <@tag>*_
  ▢ _${usedPrefix}crime
  ▢ _${usedPrefix}transfer *<tipo> <cant> <@tag>*_
  ▢ _${usedPrefix}unreg *<sn>*_


  ${tradutor.texto1[27]}

  ▢ _${usedPrefix}sticker *<responder a img o video>*_
  ▢ _${usedPrefix}sticker *<url>*_
  ▢ _${usedPrefix}sticker2 *<responder a img o video>*_
  ▢ _${usedPrefix}sticker2 *<url>*_
  ▢ _${usedPrefix}s *<responder a img o video>*_
  ▢ _${usedPrefix}s *<url>*_
  ▢ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
  ▢ _${usedPrefix}scircle *<img>*_
  ▢ _${usedPrefix}sremovebg *<img>*_
  ▢ _${usedPrefix}semoji *<tipo> <emoji>*_
  ▢ _${usedPrefix}qc *<txt>*_
  ▢ _${usedPrefix}attp *<txt>*_
  ▢ _${usedPrefix}attp2 *<txt>*_
  ▢ _${usedPrefix}attp3 *<txt>*_
  ▢ _${usedPrefix}pat *<@tag>*_
  ▢ _${usedPrefix}slap *<@tag>*_
  ▢ _${usedPrefix}kiss *<@tag>*_
  ▢ _${usedPrefix}dado_
  ▢ _${usedPrefix}stickermarker *<efecto> <img>*_
  ▢ _${usedPrefix}stickerfilter *<efecto> <img>*_


  ${tradutor.texto1[28]}

  ▢ _> *<funcion>*_
  ▢ _=> *<funcion>*_
  ▢ _$ *<funcion>*_
  ▢ _${usedPrefix}dsowner_
  ▢ _${usedPrefix}setprefix *<prefijo>*_
  ▢ _${usedPrefix}resetprefix_
  ▢ _${usedPrefix}autoadmin_
  ▢ _${usedPrefix}grouplist_
  ▢ _${usedPrefix}chetar_
  ▢ _${usedPrefix}leavegc_
  ▢ _${usedPrefix}cajafuerte_
  ▢ _${usedPrefix}blocklist_
  ▢ _${usedPrefix}addowner *<@tag / num>*_
  ▢ _${usedPrefix}delowner *<@tag / num>*_
  ▢ _${usedPrefix}block *<@tag / num>*_
  ▢ _${usedPrefix}unblock *<@tag / num>*_
  ▢ _${usedPrefix}включить *restrict*_
  ▢ _${usedPrefix}выключить *restrict*_
  ▢ _${usedPrefix}включить *autoread*_
  ▢ _${usedPrefix}выключить *autoread*_
  ▢ _${usedPrefix}включить *public*_
  ▢ _${usedPrefix}выключить *public*_
  ▢ _${usedPrefix}включить *pconly*_
  ▢ _${usedPrefix}выключить *pconly*_
  ▢ _${usedPrefix}включить *gconly*_
  ▢ _${usedPrefix}выключить *gconly*_
  ▢ _${usedPrefix}включить *anticall*_
  ▢ _${usedPrefix}выключить *anticall*_
  ▢ _${usedPrefix}включить *antiprivado*_
  ▢ _${usedPrefix}выключить *antiprivado*_
  ▢ _${usedPrefix}включить *modejadibot*_
  ▢ _${usedPrefix}выключить *modejadibot*_
  ▢ _${usedPrefix}включить *audios_bot*_
  ▢ _${usedPrefix}выключить *audios_bot*_
  ▢ _${usedPrefix}включить *antispam*_
  ▢ _${usedPrefix}выключить *antispam*_
  ▢ _${usedPrefix}msg *<txt>*_
  ▢ _${usedPrefix}banchat_
  ▢ _${usedPrefix}unbanchat_
  ▢ _${usedPrefix}resetuser *<@tag>*_
  ▢ _${usedPrefix}banuser *<@tag>*_
  ▢ _${usedPrefix}unbanuser *<@tag>*_
  ▢ _${usedPrefix}dardiamantes *<@tag> <cant>*_
  ▢ _${usedPrefix}añadirxp *<@tag> <cant>*_
  ▢ _${usedPrefix}banuser *<@tag>*_
  ▢ _${usedPrefix}bc *<txt>*_
  ▢ _${usedPrefix}bcchats *<txt>*_
  ▢ _${usedPrefix}bcgc *<txt>*_
  ▢ _${usedPrefix}bcgc2 *<aud>*_
  ▢ _${usedPrefix}bcgc2 *<vid>*_
  ▢ _${usedPrefix}bcgc2 *<img>*_
  ▢ _${usedPrefix}bcbot *<txt>*_
  ▢ _${usedPrefix}cleartpm_
  ▢ _${usedPrefix}restart_
  ▢ _${usedPrefix}update_
  ▢ _${usedPrefix}banlist_
  ▢ _${usedPrefix}addprem *<@tag> <tiempo>*_
  ▢ _${usedPrefix}addprem2 *<@tag> <tiempo>*_
  ▢ _${usedPrefix}addprem3 *<@tag> <tiempo>*_
  ▢ _${usedPrefix}addprem4 *<@tag> <tiempo>*_
  ▢ _${usedPrefix}delprem *<@tag>*_
  ▢ _${usedPrefix}listcmd_
  ▢ _${usedPrefix}setppbot *<responder a img>*_
  ▢ _${usedPrefix}addcmd *<txt>*_
  ▢ _${usedPrefix}delcmd_
  ▢ _${usedPrefix}saveimage_
  ▢ _${usedPrefix}viewimage_`.trim();


    let pp
    // Nouvelles images de menu disponibles 
    if (idioma == 'es') {
      pp = global.imagen4
    } else if (idioma == 'pt-br') {
      pp = global.imagen7
    } else if (idioma == 'fr') {
      pp = global.imagen8
    }else if (idioma == 'en') {
      pp = global.imagen9
    } else if (idioma == 'ru') {
      pp = global.imagen10
    } else {
      pp = global.imagen4 // Imagem Default em espanhol
    }

    

    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = { 'key': { 'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo' }, 'message': { 'contactMessage': { 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, 'participant': '0@s.whatsapp.net' };
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: m });
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = { 'key': { 'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo' }, 'message': { 'contactMessage': { 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, 'participant': '0@s.whatsapp.net' };
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak2 });
    }
  } catch {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu

    conn.reply(m.chat, tradutor.texto1[29], m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|меню|менюшка|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
