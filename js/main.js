var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    var triggerTabList = [].slice.call(document.querySelectorAll('#myTab button'))
    triggerTabList.forEach(function (triggerEl) {
     var tabTrigger = new bootstrap.Tab(triggerEl)
     triggerEl.addEventListener('click', function (event) {
     event.preventDefault()
     tabTrigger.show()
     })
    })
