// Simple hover effect enhancement
        document.querySelectorAll('.card, .wallpaper-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
                this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.12)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.05)';
            });
        });
        
        // Download button effect
        document.querySelectorAll('.btn, .wallpaper-btn').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
        
        // Simulate download action
        document.querySelectorAll('.btn, .wallpaper-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                if(!this.classList.contains('btn-download-all')) {
                    e.preventDefault();
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
                    
                    setTimeout(() => {
                        this.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
                        this.style.backgroundColor = 'var(--moss-green)';
                        
                        setTimeout(() => {
                            this.innerHTML = originalText;
                            this.style.backgroundColor = '';
                            window.location.href = this.href;
                        }, 1500);
                    }, 1500);
                }
            });
        });