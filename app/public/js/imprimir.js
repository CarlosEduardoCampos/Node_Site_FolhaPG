const puppeteer = require('puppeteer');

function imprimir(){
    alert('teste');
    (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Defina seu HTML aqui. Eu estou usando uma tabela simples para este exemplo.
    const content = `
        <html>
        <body>
            <table>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Cargo</th>
            </tr>
            <tr>
                <td>João Silva</td>
                <td>joao.silva@empresa.com.br</td>
                <td>(31) 98765-4321</td>
                <td>Gerente</td>
            </tr>
            <!-- Adicione mais colaboradores conforme necessário -->
            </table>
        </body>
        </html>
    `;

    await page.setContent(content);
    await page.pdf({ path: 'lista_de_colaboradores.pdf', format: 'A4' });

    await browser.close();
    })();
}