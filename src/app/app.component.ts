import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('panelInOut', [
        transition(':enter', [
            style({opacity:0}),
            animate(500, style({opacity:1}))
        ]),
        transition(':leave', [
            animate(500, style({opacity:0})) 
        ])
    ])
],
})




export class AppComponent {
  title = 'Portfolio-Web';
  currentAngle = 0;
  menuOpen = false;

  showFoxtraps = false;
  showFlashcards = false;
  showLive = false;
  showLogos = false;
  showStud = false;
  showSupermarket = false;
  showWayup = false;
  showPortfolio = false;
  showConcept = false;

@HostListener('mousemove', ['$event']) mouseMove($event: MouseEvent)
{
  var x = $event.clientX - 50;
  var y = $event.clientY - 50;

  //Set the position of the circle 
  document.documentElement.style.setProperty('--flashlightX', x + 'px');
  document.documentElement.style.setProperty('--flashlightY', y + 'px');

  //TODO Verzögerung hinzufügen!!!

  }

  slideLeft()
  {
    this.currentAngle += 30;
    document.documentElement.style.setProperty('--rotation',  this.currentAngle + 'deg');
    //TODO rotate every child to left
  }

  slideRight()
  {
    this.currentAngle -= 30;
    document.documentElement.style.setProperty('--rotation',  this.currentAngle + 'deg');

    //TODO rotate every child to right
  }

  menuButton()
  {
    if(this.menuOpen)
    {
      this.closeMenu();
      this.menuOpen = false;
    }
    else
    {
      this.openMenu();
      this.menuOpen = true;
    }
  }

  openMenu()
  {
    document.documentElement.style.setProperty('--menuWidth',  '100%');
    document.documentElement.style.setProperty('--menuButtonRotation',  '90deg');
  }

  closeMenu()
  {
    document.documentElement.style.setProperty('--menuWidth',  '0px');
    document.documentElement.style.setProperty('--menuButtonRotation',  '0deg');
  }

  showSlide(name)
  {
    if (name == "foxtraps")
    {
      this.showFoxtraps = true;
    }
    else if(name == "flashcards")
    {
      this.showFlashcards = true;
    }
    else if(name == "live")
    {
      this.showLive = true;
    }
    else if(name == "logos")
    {
      this.showLogos = true;
    }
    else if(name == "stud")
    {
      this.showStud = true;
    }
    else if(name == "supermarket")
    {
      this.showSupermarket = true;
    }
    else if(name == "wayup")
    {
      this.showWayup = true;
    }
    else if(name == "portfolio")
    {
      this.showPortfolio = true;
    }
    else if(name == "concept")
    {
      this.showConcept = true;
    }
  }

  closeSlide(name)
  {
    if (name == "foxtraps")
    {
      this.showFoxtraps = false;
    }
    else if(name == "flashcards")
    {
      this.showFlashcards = false;
    }
    else if(name == "live")
    {
      this.showLive = false;
    }
    else if(name == "logos")
    {
      this.showLogos = false;
    }
    else if(name == "stud")
    {
      this.showStud = false;
    }
    else if(name == "supermarket")
    {
      this.showSupermarket = false;
    }
    else if(name == "wayup")
    {
      this.showWayup = false;
    }
    else if(name == "portfolio")
    {
      this.showPortfolio = false;
    }
    else if(name == "concept")
    {
      this.showConcept = false;
    }
  }

}
