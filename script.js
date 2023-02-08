
function Encrypt(f) {
var word, newword, code, newcode, newletter
var addkey, multkey
word = f.p.value
word = word.toLowerCase()
word = word.replace(/\W/g, "")
addkey = 0
for (i=0; i < f.add.options.length; i++) {
addkey = addkey + (f.add.options[i].text)*(f.add.options[i].selected)
}
multkey = 0
for (i=0; i < f.mult.options.length; i++) {
multkey = multkey + (f.mult.options[i].text)*(f.mult.options[i].selected)
}
newword = ""
for (i = 0; i < word.length; i++) {
code = word.charCodeAt(i) - 97
newcode = ( (multkey*code + addkey) % 26 ) + 97
newletter = String.fromCharCode(newcode)
newword = newword + newletter
}
f.c.value = newword + " "
}
function Decrypt(f) {
var word, newword, code, newcode, newletter
var addkey, multkey, multinverse
word = f.c.value
word = word.toLowerCase()
word = word.replace(/\W/g, "")
addkey = 0
for (i=0; i < f.add.options.length; i++) {
addkey = addkey + (f.add.options[i].text)*(f.add.options[i].selected)
}
multkey = 0
for (i=0; i < f.mult.options.length; i++) {
multkey = multkey + (f.mult.options[i].text)*(f.mult.options[i].selected)
}
multinverse = 1
for (i=1; i <= 25; i = i + 2) {
if ( (multkey*i) % 26 == 1 ) { multinverse = i }
}
newword = ""

for (i = 0; i < word.length; i++) {
code = word.charCodeAt(i) - 97
newcode = ( (multinverse*(code + 26 - addkey)) % 26 ) + 97
newletter = String.fromCharCode(newcode)
newword = newword + newletter
}
f.p.value = newword.toLowerCase()
}
