var DirectoryEditor = function(entry) {
    var editor = document.createElement('div')
    editor.className = 'directory-editor'
    var actionsBar = document.createElement('div')
    actionsBar.className = 'actions'
    actionsBar.innerHTML = '<b>' + cwd + entry.path + '</b> '
    var renameButton = document.createElement('button')
    renameButton.innerHTML = '目录改名'
    $(renameButton).click(function(e) {
        var newName = prompt('目录名改为:', entry.name)
        if (newName) {
            connection.renameFile(entry.path, entry.path.replace(/\/[^\/]+$/, '/' + newName))
        }
    })
    actionsBar.appendChild(renameButton)


    actionsBar.appendChild(newdirButton)

    editor.appendChild(actionsBar)
    return editor
}
