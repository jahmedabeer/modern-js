const js = {
    name: 'JavaScript',
    libraries: ['React', 'Vue', 'Angular'],
    printLibraries() {
        this.libraries.forEach(function (library) {
            console.log(`${this.name} library: ${library}`);
        })
    },
    printLibrariesArrow() {
        this.libraries.forEach((library) => console.log(`${this.name} library: ${library}`));
    }
}

// js.printLibraries(); // this is undefined in the callback function because it refers to the global object
js.printLibrariesArrow();