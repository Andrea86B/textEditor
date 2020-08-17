updateText = () =>{
    let text = document.getElementById('text-input').value;
    document.getElementById('text-output').innerText = text;
  }

makeBold = (elem) =>{
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}


makeItalic = (elem) =>{
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}

makeUnderline = (elem) => {
  elem.classList.toggle('active');
  if (document.getElementById('text-output').classList.contains('underline')){
    document.getElementById('text-output').classList.remove('underline');
  } else {
    document.getElementById('text-output').classList.add('underline');
  }
}

alignText = (elem, alignType) => {
  document.getElementById('text-output').style.textAlign = alignType;
  let alignBtns = document.getElementsByClassName('align');
  for(let button of alignBtns){
    button.classList.remove('active');
  }
  elem.classList.toggle('active');
}