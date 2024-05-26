import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  @ViewChild('quotesDiv') quotesDiv: ElementRef;
  // quotesBtnArr = ['Love', 'Friends', 'Life', 'Enemy', 'Motivation','Positive']
  quotesBtnArr = ['Life', 'Friends', 'Love', 'Enemy', 'Motivation','Positive']

  currentIndex = 0;
  showQuotes = ''
  bgImage = ''
  themeColor = ''
  marginLeft = '0px'
  quoteImage = ''

  Love: any[] = [' "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more" ', '"Loved you yesterday, love you still, always have, always will"', '"Women are meant to be loved, not to be understood"']
  Friends: any[] = ['"True friends never apart, may be in distance but never in heart."', '"My best friend is the one who brings out the best in me."', '“Two things you will never have to chase: True friends & true love.”']
  Life: any[] = ['"It is not the strength of the body that counts, but the strength of the spirit."', '" Life is not a problem to be solved, but a reality to be experienced."', '" My mama always said, life is like a box of chocolates. You never know what you are gonna get."']
  Positive: any[] = ['"You’re braver than you believe, and stronger than you seem, and smarter than you think"', '" Even miracles take a little time "', '"Stay positive. Better days are on their way"']
  Motivational: any[] = ['"Goal setting is the secret to a compelling future."', '" If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you"', '"Success is not final; failure is not fatal: It is the courage to continue that counts."']
  Enemy: any[] = ['"You have enemies? Good. That means you have stood up for something, sometime in your life."', '"Always forgive your enemies; nothing annoys them so much."', '"Never interrupt your enemy when he is making a mistake"']

  i = 0
  preveQuoteType = ''
  txtColor = 'white'

  constructor() { }

  ngOnInit(): void {
  }

  nextSlide() {
    if (this.currentIndex < this.quotesBtnArr.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to the first slide
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.quotesBtnArr.length - 1; // Loop back to the last slide
    }
  }

  showQuote(quoteType: string) {
    if (this.preveQuoteType != quoteType) {
      this.i = 0;
    }

    switch (quoteType) {
      case 'Love':
        if (this.i < this.Love.length) {
          this.marginLeft='0px'
          this.txtColor = 'black'
          this.themeColor = '#fcb4bc'
          this.bgImage = 'url("assets/images/love.avif")';
          this.quoteImage = '/assets/images/loveGif.gif'
          this.typeWriter(this.Love[this.i]);
          this.i++;
          this.preveQuoteType = 'Love'
        }
        break;

      case 'Friends':
        if (this.i < this.Friends.length) {
          this.marginLeft='0px'
          this.themeColor = '#d59aac'
          this.txtColor = 'black'
          this.bgImage = 'url("assets/images/Friends.jpeg")';
          this.quoteImage = '/assets/images/FriendsGif.gif'
          this.typeWriter(this.Friends[this.i]);
          this.i++;
          this.preveQuoteType = 'Friends'
        }
        break;

      case 'Life':
        if (this.i < this.Life.length) {
          this.marginLeft='0px'
          this.txtColor = 'black'
          this.themeColor = '#ab7b4b'
          this.bgImage = 'url("assets/images/Life.jpg")';
          this.quoteImage = '/assets/images/LifeGif.gif'
          this.typeWriter(this.Life[this.i]);
          this.i++;
          this.preveQuoteType = 'Life'
        }
        break;

      case 'Enemy':
        if (this.i < this.Enemy.length) {

          this.marginLeft='0px'
          this.txtColor = 'white'
          this.themeColor = 'black'
          this.bgImage = 'url("assets/images/Enemy.webp")';
          this.quoteImage = '/assets/images/EnemyGif.jpg'
          this.typeWriter(this.Enemy[this.i]);
          this.i++;
          this.preveQuoteType = 'Enemy'
        }
        break;

      case 'Motivation':
        if (this.i < this.Motivational.length) {
          this.marginLeft = '120px'
          this.themeColor = '#ffc203'
          this.txtColor = 'white'
          this.bgImage = 'url("assets/images/motivation.jpg")';
          this.quoteImage = '/assets/images/MotivationalGif.gif'
          this.typeWriter(this.Motivational[this.i]);
          this.i++;
          this.preveQuoteType = 'Motivation'

        }
        break;

        case 'Positive':
          if (this.i < this.Positive.length) {
            this.marginLeft = '120px'
            this.themeColor = '#fadb71'
            this.txtColor = 'black'
            this.bgImage = 'url("assets/images/positive.webp")';
            this.quoteImage = '/assets/images/positiveGif.gif'
            this.typeWriter(this.Positive[this.i]);
            this.i++;
            this.preveQuoteType = 'Positive'
  
          }
          break;

      default:
        console.error('Unknown quote type');
    }

  }

  interval: any; // Reference to the interval
  typeWriter(text: string) {
    let index = 0;
    this.showQuotes = '';

      // Clear any existing interval
      if (this.interval) {
        clearInterval(this.interval);

        
      }

     this.interval = setInterval(() => {
      if (index < text.length) {
        this.showQuotes += text.charAt(index);
        index++;
      } else {
        clearInterval(this.interval);
      }
    }, 80); // Adjust the delay (in milliseconds) for the typing speed
  }

}
