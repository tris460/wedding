import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-save-the-date',
  imports: [CommonModule],
  templateUrl: './save-the-date.html',
  styleUrl: './save-the-date.scss'
})
export class SaveTheDate {
  totalPhotos = 388;
  photos: string[] = [];
  loadedImages: Set<number> = new Set();

  // Lightbox state
  lightboxOpen = false;
  currentIndex = 0;

  // Hearts animation
  hearts: { id: number; x: number; y: number }[] = [];
  private heartCounter = 0;

  ngOnInit() {
    this.photos = Array.from({ length: this.totalPhotos }, (_, i) => `save-the-date/photo-${i + 1}.jpg`);
  }

  onImageLoad(index: number) {
    this.loadedImages.add(index);
  }

  isLoaded(index: number): boolean {
    return this.loadedImages.has(index);
  }

  // Lightbox
  openLightbox(index: number) {
    this.currentIndex = index;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  nextImage(event?: Event) {
    if (event) event.stopPropagation();
    this.currentIndex = (this.currentIndex + 1) % this.photos.length;
  }

  prevImage(event?: Event) {
    if (event) event.stopPropagation();
    this.currentIndex = (this.currentIndex - 1 + this.photos.length) % this.photos.length;
  }

  downloadImage(event?: Event) {
    if (event) event.stopPropagation();
    const link = document.createElement('a');
    link.href = this.photos[this.currentIndex];
    link.download = `photo-${this.currentIndex + 1}.jpg`;
    link.click();
  }

  onKeydown(event: KeyboardEvent) {
    if (!this.lightboxOpen) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowRight') this.nextImage();
    if (event.key === 'ArrowLeft') this.prevImage();
  }

  // Double click hearts
  onDoubleClick(event: MouseEvent) {
    const count = 8;
    for (let i = 0; i < count; i++) {
      this.heartCounter++;
      this.hearts.push({
        id: this.heartCounter,
        x: event.clientX + (Math.random() - 0.5) * 40,
        y: event.clientY + (Math.random() - 0.5) * 40
      });
    }
    // Remove hearts after animation
    setTimeout(() => {
      this.hearts.splice(0, count);
    }, 1500);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
