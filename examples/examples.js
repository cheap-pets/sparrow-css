document.addEventListener('click', event => {
  const target = event.target
  if (target.tagName.toLowerCase() === 'a' && target.classList && target.classList.contains('list-group-item')) {
    const lastActive = target.parentNode.querySelector('.active')
    if (lastActive) lastActive.classList.remove('active')
    target.classList.contains('active')
      ? target.classList.remove('active')
      : target.classList.add('active')
  }
  const toggleType = target.getAttribute('toggle-type')
  if (toggleType === 'expand') {
    const expanded = target.getAttribute('expanded')
    if (expanded || expanded === '') {
      target.removeAttribute('expanded')
    } else {
      target.setAttribute('expanded', '')
    }
  } else if (toggleType === 'check') {
    const checked = target.getAttribute('checked')
    if (checked || checked === '') {
      target.removeAttribute('checked')
    } else {
      target.setAttribute('checked', '')
    }
  } else if (toggleType === 'star') {
    const checked = target.getAttribute('checked')
    if (checked || checked === '') {
      target.removeAttribute('checked')
    } else {
      target.setAttribute('checked', '')
    }
  } else if (toggleType === 'checkbox') {
    const checked = target.getAttribute('checked')
    if (checked || checked === '') {
      target.removeAttribute('checked')
    } else {
      target.setAttribute('checked', '')
    }
  }
})