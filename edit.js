// Abrir la carpeta de imágenes en la laptop/
function openFolder(folderKey, folderTitle) {
  const explorerWindow = document.getElementById('laptop-explorer-window');
  const windowTitle = document.getElementById('explorer-window-title');
  
  windowTitle.innerText = `Folder: ${folderTitle}`;
  explorerWindow.style.display = 'flex';
}

// Mostrar la imagen en grande al hacer clic
function openMedia(element) {
  const playerWindow = document.getElementById('laptop-player-window');
  const playerContainer = document.getElementById('player-media-container');
  const playerTitle = document.getElementById('player-window-title');

  playerTitle.innerText = "Vista previa";
  playerContainer.innerHTML = `<img src="${element.src}" style="max-width: 85%; max-height: 85%; border-radius: 8px;">`;
  playerWindow.style.display = 'flex';
}

// Cerrar ventanas del explorador o reproductor
function closeWindow(windowId) {
  document.getElementById(windowId).style.display = 'none';
}

// Abrir el Scrapbook en la pestaña específica
function openScrapbook(tabName = 'extracurriculars') {
  document.getElementById('scrapbook-modal').style.display = 'flex';
  switchTab(tabName);
}

// Cerrar el Scrapbook
function closeScrapbook() {
  document.getElementById('scrapbook-modal').style.display = 'none';
}

// Cambiar entre pestañas (Extracurriculars / Friends / Hobbies)
function switchTab(tabName) {
  const tabs = ['extracurriculars', 'friends', 'hobbies'];
  
  tabs.forEach(tab => {
    const el = document.getElementById(`tab-${tab}`);
    if (el) {
      el.style.display = (tab === tabName) ? 'block' : 'none';
    }
  });

  // Al cambiar a Extracurriculars, siempre inicia en la página 1
  if (tabName === 'extracurriculars') {
    changePage(1);
  }
}

// Cambiar páginas internas de Extracurriculars (pág 1 y pág 2)
function changePage(pageNum) {
  const page1 = document.getElementById('extracurriculars-page-1');
  const page2 = document.getElementById('extracurriculars-page-2');

  if (page1 && page2) {
    if (pageNum === 1) {
      page1.style.display = 'block';
      page2.style.display = 'none';
    } else if (pageNum === 2) {
    page1.style.display = 'none';
    page2.style.display = 'block';
    }
  }
}

