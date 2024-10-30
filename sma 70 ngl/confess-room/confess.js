// script.js
document.getElementById('submit-confession').addEventListener('click', function() {
    const confessionInput = document.getElementById('confession-input');
    const confessionText = confessionInput.value;
  
    if (confessionText.trim() === '') {
      alert('Confession tidak boleh kosong!');
      return;
    }
  
    // Create confession item
    const confessionItem = document.createElement('div');
    confessionItem.classList.add('confession-item');
    
    const confessionContent = document.createElement('p');
    confessionContent.textContent = confessionText;
    confessionItem.appendChild(confessionContent);
  
    // Add current date
    const date = new Date();
    const formattedDate = date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    
    const confessionDate = document.createElement('div');
    confessionDate.classList.add('confession-date');
    confessionDate.textContent = `Dikirim pada: ${formattedDate}`;
    confessionItem.appendChild(confessionDate);
  
    // Add reactions
    const reactionsDiv = document.createElement('div');
    reactionsDiv.classList.add('reactions');
  
    // Create reaction buttons
    const reactions = ['👍', '❤️', '😂'];
    reactions.forEach(reaction => {
      const reactionBtn = document.createElement('button');
      reactionBtn.classList.add('reaction-btn');
      reactionBtn.innerHTML = `${reaction} <span class="reaction-count">0</span>`;
      
      // Add event listener to increment reaction count and show floating emoji
      reactionBtn.addEventListener('click', function() {
        const countSpan = this.querySelector('.reaction-count');
        let currentCount = parseInt(countSpan.textContent);
        countSpan.textContent = currentCount + 1;
  
        // Create floating emoji
        const floatingEmoji = document.createElement('span');
        floatingEmoji.classList.add('floating-emoji');
        floatingEmoji.textContent = reaction;
  
        // Position the emoji at the button's position
        const rect = this.getBoundingClientRect();
        floatingEmoji.style.left = `${rect.left + window.scrollX}px`;
        floatingEmoji.style.top = `${rect.top + window.scrollY}px`;
  
        // Append the emoji to the body (so it can float above everything)
        document.body.appendChild(floatingEmoji);
  
        // Remove the emoji after animation ends
        setTimeout(() => {
          floatingEmoji.remove();
        }, 2000); // Emoji will be removed after 1 second (duration of the animation)
      });
      
      reactionsDiv.appendChild(reactionBtn);
    });
  
    confessionItem.appendChild(reactionsDiv);
    
    // Append confession to list
    document.getElementById('confession-list').appendChild(confessionItem);
  
    // Clear the input field
    confessionInput.value = '';
  });
  