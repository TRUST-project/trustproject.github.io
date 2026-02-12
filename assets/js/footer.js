document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
<footer>
        <div class="footer-content">
            <div class="footer-col">
                <h4>TRUST Project</h4>
                <!--<p>A research initiative funded by
                    [INSERTAR funders].</p>-->
            </div>
            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="team.html">Meet the Team</a></li>
                    <li><a href="news.html">News & Events</a></li>
                    <li><a href="studies.html">See our studies</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Contact</h4>
                <a href="https://produccioncientifica.ugr.es/investigadores/455064/detalle" target="_blank" rel="noopener" style="color: chocolate;">María Victoria Martínez-López</a><br>
                <p>Nursing Department,<br>University of Granada</p>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2025 TRUST Project.<br>
            Website by Jorge Suárez 
            <a href="https://github.com/JorgeSuarezM" target="_blank" rel="noopener">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Github_logo_svg.svg" alt="GitHub" width="20" height="20" style="vertical-align: middle;">
            </a>
        </div>
    </footer>
    `
  );
});
