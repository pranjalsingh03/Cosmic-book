import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-write',
    templateUrl: './write.component.html',
    styleUrls: ['./write.component.css']
})
export class WriteComponent {
    constructor(private http: HttpClient, private router: Router) { }

    book = {
        title: '',
        author: '',
        description: ''
    };
    title = 'Why should you publish on Cosmic-Book?';
    reasons = [
        {
            image: 'https://neovel.io/assets/images/new_icons/reading-witch.svg',
            alt: 'Find readers',
            heading: 'To find readers',
            description: "Neovel's readership is growing and they're looking for fresh quality content."
        },
        {
            image: 'https://neovel.io/assets/images/new_icons/community.svg',
            alt: 'Join a community',
            heading: 'To join a community',
            description: 'Receive comments, reactions and ratings of your chapters, and interact with other authors and your readers.'
        },
        {
            image: 'https://neovel.io/assets/images/new_icons/robot-writing.svg',
            alt: 'To be paid',
            heading: 'To be paid',
            description: 'Make money by doing something you enjoy, regardless of your writing skills (45% of our profits are distributed to our authors).'
        }
    ];

    submitBook() {
        console.log('Submitting book:', this.book);
        this.router.navigate(['/']);
    }
}
