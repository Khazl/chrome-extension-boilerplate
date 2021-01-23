document.addEventListener('DOMContentLoaded', () => {

    // Action 1
    document.getElementById('startAction1').addEventListener('click', () => {
        renderStatus('Doing something...');
        chrome.tabs.executeScript(null, {file: 'actions/action1.js'}, () => {
            renderStatus('Doing something... Done');
        });
    });

    // Action 2
    document.getElementById('startAction2').addEventListener('click', () => {
        renderStatus('Doing something else...');
        chrome.tabs.executeScript(null, {file: 'actions/action2.js'}, () => {
            renderStatus('Doing something else... Done');
        });
    });
});

// Status Text Utility
var statusTimeout;
function renderStatus(statusText) {
    clearTimeout(statusTimeout);
    document.getElementById('status').textContent = statusText;
    statusTimeout = setTimeout(setDefaultStatus, 3000);
}

function setDefaultStatus() {
    document.getElementById('status').textContent = "Waiting - Ready for action";
}