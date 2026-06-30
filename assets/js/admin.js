/**
 * VintageVroom - Admin.js
 * Admin Panel controls: Sidebar collapse, statistics updates, session logout simulation.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Sidebar Toggle Drawer
    const toggleBtn = document.querySelector('.menu-toggle-btn');
    const sidebar = document.querySelector('.admin-sidebar');
    
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target) && window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    }

    // 2. Active Sidebar Link Highlighting
    const currentPath = window.location.pathname;
    const sidebarLinks = document.querySelectorAll('.admin-nav-item');
    
    sidebarLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref) {
            const cleanHref = linkHref.replace('../', '').replace('admin/', '');
            if (currentPath.endsWith(cleanHref)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });

    // 3. Logout Simulation
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Apakah Anda yakin ingin keluar dari panel administrator?')) {
                VintageVroomToast.show('Keluar sukses! Mengalihkan...', 'success');
                setTimeout(() => {
                    window.location.href = '../../index.html';
                }, 1200);
            }
        });
    }

    // 4. Calculate and Update Admin Dashboard Header/Stats Card Metrics
    calculateMetrics();
});

function calculateMetrics() {
    // Stat elements references
    const countProdsEl = document.getElementById('stat-total-products');
    const countUsersEl = document.getElementById('stat-total-users');
    const countTransEl = document.getElementById('stat-total-transactions');
    const sumEarningsEl = document.getElementById('stat-total-earnings');

    // Load datasets from storage
    const products = VintageVroomStorage.getProducts();
    const users = VintageVroomStorage.getUsers();
    const transactions = VintageVroomStorage.getTransactions();

    if (countProdsEl) {
        countProdsEl.textContent = products.length;
    }
    
    if (countUsersEl) {
        countUsersEl.textContent = users.length;
    }

    if (countTransEl) {
        countTransEl.textContent = transactions.length;
    }

    if (sumEarningsEl) {
        // Earnings represent successful 'selesai' and shipped/processed orders
        const validStatuses = ['selesai', 'dikirim', 'diproses'];
        const totalEarnings = transactions
            .filter(t => validStatuses.includes(t.status))
            .reduce((sum, t) => sum + t.total, 0);

        sumEarningsEl.textContent = VintageVroomStorage.formatRupiah(totalEarnings);
    }
}
