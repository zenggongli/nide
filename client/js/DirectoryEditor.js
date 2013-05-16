var DirectoryEditor = function(entry) {
    var editor = document.createElement('div')
    editor.className = 'directory-editor'
    var actionsBar = document.createElement('div')
    actionsBar.className = 'actions'
    actionsBar.innerHTML = '<b>' + cwd + entry.path + '</b> '
    var renameButton = document.createElement('button')
    renameButton.innerHTML = '改目录名'
    $(renameButton).click(function(e) {
        var newName = prompt('目录名改为:', entry.name)
        if (newName) {
            connection.renameFile(entry.path, entry.path.replace(/\/[^\/]+$/, '/' + newName))
        }
    })
    actionsBar.appendChild(renameButton)

    var newfileButton = document.createElement('button')
    newfileButton.innerHTML = '新建文件'
    $(newfileButton).click(function(e) {
        var newName = prompt('新文件名:','file.txt')
        if (newName) {
            connection.addFile(entry.path+ '/' + newName)
        }
    })

    actionsBar.appendChild(newfileButton)


    var newdirButton = document.createElement('button')
    newdirButton.innerHTML = '新建目录'
    $(newdirButton).click(function(e) {
        var newName = prompt('新目录名:', 'dir')
        if (newName) {
            connection.addFolder(entry.path+ '/' + newName)
        }
    })

    actionsBar.appendChild(newdirButton)

    editor.appendChild(actionsBar)
    return editor
}
