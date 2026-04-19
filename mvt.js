document.getElementById('mvt-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const vuelo_llegada = document.getElementById('vuelo_llegada').value || '---';
    const fecha         = document.getElementById('fecha').value || '---';
    const aeronave      = document.getElementById('aeronave').value || '---';
    const apto_llegada  = document.getElementById('apto_llegada').value || '---';
    const hora_aterriz  = document.getElementById('hora_aterriz').value || '---';
    const hora_calzado  = document.getElementById('hora_calzado').value || '---';
    const vuelo_salida  = document.getElementById('vuelo_salida').value || '---';
    const destino       = document.getElementById('destino').value || '---';
    const hora_salida   = document.getElementById('hora_salida').value || '---';
    const hora_despegue = document.getElementById('hora_despegue').value || '---';
    const duracion      = document.getElementById('duracion').value || '---';
    const alternativo   = document.getElementById('alternativo').value;
    const dl1_codigo    = document.getElementById('dl1_codigo').value;
    const dl1_hora      = document.getElementById('dl1_hora').value;
    const dl2_codigo    = document.getElementById('dl2_codigo').value;
    const dl2_hora      = document.getElementById('dl2_hora').value;
    const dl3_codigo    = document.getElementById('dl3_codigo').value;
    const dl3_hora      = document.getElementById('dl3_hora').value;

    let demoras = '';
    if (dl1_codigo) demoras += `\nDL1: ${dl1_codigo} - ${dl1_hora}`;
    if (dl2_codigo) demoras += `\nDL2: ${dl2_codigo} - ${dl2_hora}`;
    if (dl3_codigo) demoras += `\nDL3: ${dl3_codigo} - ${dl3_hora}`;

    const mensaje =
`MVT
${vuelo_llegada}/${fecha}
.${apto_llegada} ATA ${hora_aterriz} AIG ${hora_calzado}
REG ${aeronave}
${vuelo_salida}/${destino}
OUT ${hora_salida}
OFF ${hora_despegue}
EET ${duracion}${alternativo ? '\nALT ' + alternativo : ''}${demoras}`;

    document.getElementById('mensaje-output').value = mensaje;
    document.getElementById('popup-overlay').style.display = 'flex';
});

function cerrarPopup() {
    document.getElementById('popup-overlay').style.display = 'none';
}

function copiarMensaje() {
    const textarea = document.getElementById('mensaje-output');
    textarea.select();
    navigator.clipboard.writeText(textarea.value).then(() => {
        const btn = document.querySelector('.btn-copiar');
        btn.textContent = '✓ COPIADO';
        setTimeout(() => btn.textContent = '📋 COPIAR', 2000);
    });
}