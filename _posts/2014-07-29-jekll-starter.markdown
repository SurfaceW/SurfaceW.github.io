---
layout: post
title:  "Markdown Beginner"
date:   2014-07-29 01:12:11
categories: jekyll freshman starter
tag: jekyll markdown github
---

Basic Markdown Language Signs

—————————— Standard Version ——————————

This version is the standard markdown sytax.

## The Code block

This is a normal paragraph.

	This is a code block with a Tab.
	this is a
	this is b
	this is c

Here is an example of AppleScript:

    tell application "Foo"
        beep
    end tell


## Paragraph

This is paragraph A.

This is paragraph B.

## Divider

This is the divide line.

* * * 

## Headings

# Level 1

## Level 2

### Level 3

#### Level 4

##### Level 5

## Block-quotes

> Youth is not a time of life, it is a state of mind.

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

## Styling Texts

This is the italic : *JavaScript Definitive Guide*

This is the bold : **This is emphasis**

## Lists

1. This is ordered list
2. 
3. 

* 
* 
* This is the first level
	* This is the second level
		* This is the third level

- The same as *
+ The same as *

*   A list item with a blockquote:

    > This is a blockquote
    > inside a list item.


## Links
[Visit Github!](http://www.github.com)

I get 10 times more traffic from [Google] [1] than from
[Yahoo] [2] or [MSN] [3].

  [1]: http://google.com/        "Google"
  [2]: http://search.yahoo.com/  "Yahoo Search"
  [3]: http://search.msn.com/    "MSN Search"


## Fenced Code Blocks
Here is an example:

```
function (b) {
	this.a = b;
}
```

—————————— Jekyll Version ——————————

## Syntax HighLight

{% highlight ruby linenos %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

{% highlight js %}
// This is a javascript function
function getName() {
	var a = 5;
	this.name = a;
	return this.name;
}
{% endhighlight %}

{% highlight html %}
<!-- This is a html demo -->
<h1>This gonna be cool~</h1>
{% endhighlight %}


—————————— Github Version ——————————

## Strike Through
~~Strike Me Through~~

## inline code
This method is`A.setName();`.

## Syntax highlighting

```JavaScript
// Insert some code here
```

## Extra Link
<http://www.google.com>

## Tables
| name | age | sex |
| yeqingnan | 12 | boy |

## Image
![logo_name](/image/logo.svg)






