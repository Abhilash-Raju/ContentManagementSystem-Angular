import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditcategoryComponent } from './components/editcategory/editcategory.component';
import { EditpostComponent } from './components/editpost/editpost.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PostsComponent } from './components/posts/posts.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [{path:'',redirectTo: 'home', pathMatch: 'full' },
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'dashboard',component:DashboardComponent},
{path:'createpost',component:CreatePostComponent},
{path:'addcategory',component:AddCategoryComponent},
{path:'contactus',component:ContactusComponent},
{path:'posts',component:PostsComponent},
{path:'categories',component:CategoriesComponent},
{path:'home',component:HomeComponent},
{path:'editcategory',component:EditcategoryComponent},
{path:'editpost',component:EditpostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
