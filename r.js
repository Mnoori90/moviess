document.addEventListener('DOMContentLoaded', () => {
    const counterBtns = document.querySelectorAll('.counter-btn');
    const ticketCountSpan = document.querySelector('.ticket-count');
    const buyTicketBtn = document.querySelector('.buy-ticket-btn');

    let ticketCount = parseInt(localStorage.getItem('ticketCount')) || 0;
    ticketCountSpan.textContent = ticketCount;

    let meow = parseInt(localStorage.getItem('meow')) || 0;

    counterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-action');
            if (action === 'increment') {
                ticketCount++;
            } else if (action === 'decrement') {
                ticketCount--;  // Allow decrementing below 0
            }
            ticketCountSpan.textContent = ticketCount;
            localStorage.setItem('ticketCount', ticketCount);
        });
    });

    if (buyTicketBtn) {
        buyTicketBtn.addEventListener('click', () => {
            meow += ticketCount;
            localStorage.setItem('meow', meow);

            ticketCount = 0;
            ticketCountSpan.textContent = ticketCount;
            localStorage.setItem('ticketCount', ticketCount);

            window.location.href = 'shoppingcart.html';
        });
    }
});
