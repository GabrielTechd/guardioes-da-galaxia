const members = [
  { name: 'Peter Quill', id: 'peter' },
  { name: 'Gamora Titan', id: 'gamora' },
  { name: 'Drax o Destruidor', id: 'drax' },
  { name: 'Mantis', id: 'mantis' },
  { name: 'Rocket Raccoon', id: 'rocket' },
  { name: 'I am Groot', id: 'groot' },
]

let activeMember = 0
const images = document.getElementById('images')
const menu = document.getElementById('menu')
const navigation = document.getElementById('navigation')
const memberName = document.getElementById('member__name')

function changerStatusButtons(){
  const prev = document.getElementById('button_preve')
  const isFirst = activeMember == 0
  prev.disabled = isFirst
  
  const next = document.getElementById('button_next')
  const isLast = activeMember == members.length - 1
  next.disabled = isLast
}

function changeMember (memberId) {
  activeMember = memberId
  const member = members[activeMember]

  images.style.transform = `translateY(${-100 * activeMember}vh)`
  
  memberName.classList = member.id
  changeName(member.name)

  changerStatusButtons()
  
}

function navigationMember(direction) {
  changeMember(activeMember + direction)
}

function changerMenu() {
  menu.classList.toggle('active')
  navigation.classList.toggle('active')
}

function setMember(memberId) {
  changeMember(memberId);
  changerMenu()
}