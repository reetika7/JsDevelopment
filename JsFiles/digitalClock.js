setInterval(()=>{
    const now = new Date();

    const formattedDate = new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: 'short',
      year: '2-digit'
    }).format(now).replace(/ /g,'-');

    const formattedTime = new Intl.DateTimeFormat('en-IN',{
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(now);

    document.getElementById('date').textContent = `${formattedDate}`;
    document.getElementById('time').textContent = `${formattedTime}`;

  },1000);