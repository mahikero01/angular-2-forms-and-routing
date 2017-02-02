import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { File } from './file';
import { DownloadService } from './download.service'

@Component({
    moduleId: module.id,
    template: `
    hello
    `
})

export class DownloadComponent implements OnInit{
    files: File[];

    constructor(
        private router: Router,
        private downloadService: DownloadService
    ) {}

    getFiles(): void {
        this.downloadService.getFiles().then(files => this.files = files);
    }

    ngOnInit(): void {
        this.getFiles();
    }

    onSelect(file: File) {
        this.router.navigate(['file/download', file.filename]);
    }
}