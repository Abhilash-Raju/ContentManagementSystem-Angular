import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PostsComponent } from './components/posts/posts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { PostComponent } from './components/post/post.component';
import { EditpostComponent } from './components/editpost/editpost.component';
import { EditcategoryComponent } from './components/editcategory/editcategory.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    CreatePostComponent,
    AddCategoryComponent,
    ContactusComponent,
    PostsComponent,
    CategoriesComponent,
    HomeComponent,
    CategoryComponent,
    PostComponent,
    EditpostComponent,
    EditcategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
