
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    let x = document.getElementById('btn-oput');
    
    for (let i = 1; i <= 100; i++) {
        let dv = document.createElement('div');
        dv.className = "flex-col";
        let p = document.createElement('p');
        p.className = 'btn-num';
        p.textContent = `${i}.`;
        dv.appendChild(p);
        document.body.appendChild(dv);
        await sleep(50);
    }
}

let btn = document.getElementById('btn');
btn.addEventListener('click', main);
