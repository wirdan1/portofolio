async function downloadTikTok() {
    const url = document.getElementById("urlInput").value;
    if (!url) return alert("Masukkan URL TikTok!");

    try {
        const response = await fetch('https://lovetik.com/api/ajax/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            body: `query=${encodeURIComponent(url)}`
        });

        const data = await response.json();
        if (!data.links || data.links.length === 0) throw new Error("Gagal mengambil data!");

        let resultHTML = `<h3>Hasil:</h3>`;

        if (data.links[0].a) {
            resultHTML += `<video controls src="${data.links[0].a}" width="300"></video>`;
        }

        resultHTML += `<p>Author: ${data.author}</p><p>Deskripsi: ${data.desc}</p>`;

        document.getElementById("result").innerHTML = resultHTML;
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}
