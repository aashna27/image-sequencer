const testModule = require('../templates/gif-module-test.js'),
  gif = require('../images/test.gif.js'),
  benchmark = 'data:image/gif;base64,R0lGODlhoABsAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQACgAAACwAAAAAoABsAIcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMLCwshISEiIiIjIyMkJCQlJSUmJiYnJycoKCgpKSkqKiorKyssLCwtLS0uLi4vLy8wMDAxMTEyMjIzMzM0NDQ1NTU2NjY3Nzc4ODg5OTk6Ojo7Ozs8PDw9PT0+Pj4/Pz9AQEBBQUFCQkJDQ0NERERFRUVGRkZHR0dISEhJSUlKSkpLS0tMTExNTU1OTk5PT09QUFBRUVFSUlJTU1NUVFRVVVVWVlZXV1dYWFhZWVlaWlpbW1tcXFxdXV1eXl5fX19gYGBhYWFiYmJjY2NkZGRlZWVmZmZnZ2doaGhpaWlqampra2tsbGxtbW1ubm5vb29wcHBxcXFycnJzc3N0dHR1dXV2dnZ3d3d4eHh5eXl6enp7e3t8fHx9fX1+fn5/f3+AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0tLS1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnNzc3X19ff39/p6eny8vL5+fn8/Pz9/f3+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7///8I/wAfCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2Bh/hs7NuxNsgXRmo35b2HbtSzJvk1YFm7Kug3x2i05d6BcvQL77gWpNrDgB3oPD+YIGLDfuYoXa+xb+CDkyJIt4nVskHJmxp4ZUsb8GWJi0p0Noy6t8LTox2k5s6Y7unVZuQhlz45NUDfi1b13uxVM2ndn4J8rI6aN3LDw3IqjG+f9PPdx4rKV/64OvXdjx2/Dp//mPt55bOnb08MmH9y899d+j7OPH5j6ecj0r7MP/Rs7/vrulVcdf4c11l5/lU23GIFpWXagfAHuxuCDj7XlG3/ChYZbfvRN999zGKrXnHUAgsjheiM6WGKGJ1Y4GnKJDUihW6rZ9p6M/Tnkn2W1cdcjfPcpp6BkP9poWop7fScaapfNt95yOTK3pJM33idld1R6x9mF+WmXpXMFbgnhl3QZ+eSKZPJYXJFQpkmil5s16GaZVXLI5pzuiWcfdnhWGWeQY865WYitRfhljDNiqd6hbBYo34dZuiYnmBMiSeSdbbY5YabzYSrigQYemmiXelbY4n6nPrjhpJYOBumbDw1uWdqrKppGpqeL5uWmpynKOpukpsbaanLnpUqjoNK1OmxyvgKJZ5Oa9WloRc3iCJ2Xk/aJ2aDO7lroqOBSWVy2JD5LG7m1mqtjt97aBtyyrFXLo7RnqvZXZPL6OGy++737F73D3fsvwAQXbHBKAQEAIfkEAAoAAAAsAAAAAKAAbACHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDCwsLISEhIiIiIyMjJCQkJSUlJiYmJycnKCgoKSkpKioqKysrLCwsLS0tLi4uLy8vMDAwMTExMjIyMzMzNDQ0NTU1NjY2Nzc3ODg4OTk5Ojo6Ozs7PDw8PT09Pj4+Pz8/QEBAQUFBQkJCQ0NDRERERUVFRkZGR0dHSEhISUlJSkpKS0tLTExMTU1NTk5OT09PUFBQUVFRUlJSU1NTVFRUVVVVVlZWV1dXWFhYWVlZWlpaW1tbXFxcXV1dXl5eX19fYGBgYWFhYmJiY2NjZGRkZWVlZmZmZ2dnaGhoaWlpampqa2trbGxsbW1tbm5ub29vcHBwcXFxcnJyc3NzdHR0dXV1dnZ2d3d3eHh4eXl5enp6e3t7fHx8fX19fn5+f39/gICAgYGBgoKCg4ODhISEhYWFhoaGh4eHiIiIiYmJioqKi4uLjIyMjY2Njo6Oj4+PkJCQkZGRkpKSk5OTlJSUlZWVlpaWl5eXmJiYmZmZmpqam5ubnJycnZ2dnp6en5+foKCgoaGhoqKio6OjpKSkpaWlpqamp6enqKioqampqqqqq6urrKysra2trq6ur6+vsLCwsbGxsrKys7OztLS0tbW1tra2t7e3uLi4ubm5urq6u7u7vLy8vb29vr6+v7+/wMDAwcHBwsLCw8PDxMTExcXFxsbGx8fHyMjIycnJzc3N19fX39/f6enp8vLy+fn5/Pz8/f39/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+////CP8AHwgcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gYf4bOzbsTbIF0ZqN+W9h27Usyb5NWBZuyroN8dotOXegXL0C++4FqTaw4Ad6Dw/mCBiw37mKF2vsW/gg5MiSLeJ1bJByZsaeGVLG/BliYtKdDaMurfC06MdpObOmO7p1WbkIZc+OTVA34tW9d7sVTNp3Z+CfKyOmjdyw8NyKoxvn/Tz3ceKylf+uDr13Y8dvw6f/5j7eeWzp29PDJh/cvPfXfo+zjx+Y+nnI9K+zD/0bO/767pVXHX+HNdZef5VNtxiBaVl2oHwB7sbgg4+15Rt/woWGW370Tfffcxiq15x1AILI4XojOlhihidWOBpyiQ1IoVuq2faejP055J9ltXHXI3z3KaegZD/aaFqKe30nGmqXzbfecjkyt6STN94nZXdUesfZhflpl6VzBW4J4Zd0GfnkimTyWFyRUKZJopebNehmmVVyyOac7olnH3Z4VhlnkGPOuVmIrUX4ZYwzYqneoWwWKN+HWbomJ5gTIknknW22OWGm82Eq4oEGHppol3pW2OJ+pz644aSWDgbpmw8NblnaqyqaRqani+blpqcpyjqbpKbG2mpy56VKo6DStTpscr4CiWeTmvVpaEXN4gidl5P2idmgzu5a6KjgUllctiQ+Sxu5tZqrY7fe2gbcsqxVy6O0Z6r2V2Ty+jhsvvu9+xe9w937L8AEF2xwSgEBACH5BAAKAAAALAAAAACgAGwAhwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDAwsLCyEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJyc3NzdfX19/f3+np6fLy8vn5+fz8/P39/f7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v///wj/AB8IHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUKNKnUq1qtWrWLNq3cq1q9evYGH+Gzs27E2yBdGajflvYdu1LMm+TVgWbsq6DfHaLTl3oFy9AvvuBak2sOAHeg8P5ggYsN+5ihdr7Fv4IOTIki3idWyQcmbGnhlSxvwZYmLSnQ2jLq3wtOjHaTmzpju6dVm5CGXPjk1QN+LVvXe7FUzad2fgnysjpo3csPDciqMb5/0893HispX/rg69d2PHb8On/+Y+3nls6dvTwyYf3Lz3136Ps48fmPp5yPSvsw/9Gzv++u6VVx1/hzXWXn+VTbcYgWlZdqB8Ae7G4IOPteUbf8KFhlt+9E3333MYqtecdQCCyOF6IzpYYoYnVjgacokNSKFbqtn2noz9OeSfZbVx1yN89ymnoGQ/2mhaint9Jxpql8233nI5MrekkzfeJ2V3VHrH2YX5aZelcwVuCeGXdBn55Ipk8lhckVCmSaKXmzXoZplVcsjmnO6JZx92eFYZZ5BjzrlZiK1F+GWMM2Kp3qFsFijfh1m6JieYEyJJ5J1ttjlhpvNhKuKBBh6aaJd6Vtjifqc+uOGklg4G6ZsPDW5Z2qsqmkamp4vm5aanKco6m6SmxtpqcuelSqOg0rU6bHK+Aolnk5r1aWhFzeIInZeT9onZoM7uWuio4FJZXLYkPksbubWaq2O33toG3LKsVcujtGeq9ldk8vo4bL77vfsXvcPd+y/ABBdscEoBAQAh+QQACgAAACwAAAAAoABsAIcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMLCwshISEiIiIjIyMkJCQlJSUmJiYnJycoKCgpKSkqKiorKyssLCwtLS0uLi4vLy8wMDAxMTEyMjIzMzM0NDQ1NTU2NjY3Nzc4ODg5OTk6Ojo7Ozs8PDw9PT0+Pj4/Pz9AQEBBQUFCQkJDQ0NERERFRUVGRkZHR0dISEhJSUlKSkpLS0tMTExNTU1OTk5PT09QUFBRUVFSUlJTU1NUVFRVVVVWVlZXV1dYWFhZWVlaWlpbW1tcXFxdXV1eXl5fX19gYGBhYWFiYmJjY2NkZGRlZWVmZmZnZ2doaGhpaWlqampra2tsbGxtbW1ubm5vb29wcHBxcXFycnJzc3N0dHR1dXV2dnZ3d3d4eHh5eXl6enp7e3t8fHx9fX1+fn5/f3+AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0tLS1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnNzc3X19ff39/p6eny8vL5+fn8/Pz9/f3+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7///8I/wAfCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2Bh/hs7NuxNsgXRmo35b2HbtSzJvk1YFm7Kug3x2i05d6BcvQL77gWpNrDgB3oPD+YIGLDfuYoXa+xb+CDkyJIt4nVskHJmxp4ZUsb8GWJi0p0Noy6t8LTox2k5s6Y7unVZuQhlz45NUDfi1b13uxVM2ndn4J8rI6aN3LDw3IqjG+f9PPdx4rKV/64OvXdjx2/Dp//mPt55bOnb08MmH9y899d+j7OPH5j6ecj0r7MP/Rs7/vrulVcdf4c11l5/lU23GIFpWXagfAHuxuCDj7XlG3/ChYZbfvRN999zGKrXnHUAgsjheiM6WGKGJ1Y4GnKJDUihW6rZ9p6M/Tnkn2W1cdcjfPcpp6BkP9poWop7fScaapfNt95yOTK3pJM33idld1R6x9mF+WmXpXMFbgnhl3QZ+eSKZPJYXJFQpkmil5s16GaZVXLI5pzuiWcfdnhWGWeQY865WYitRfhljDNiqd6hbBYo34dZuiYnmBMiSeSdbbY5YabzYSrigQYemmiXelbY4n6nPrjhpJYOBumbDw1uWdqrKppGpqeL5uWmpynKOpukpsbaanLnpUqjoNK1OmxyvgKJZ5Oa9WloRc3iCJ2Xk/aJ2aDO7lroqOBSWVy2JD5LG7m1mqtjt97aBtyyrFXLo7RnqvZXZPL6OGy++737F73D3fsvwAQXbHBKAQEAIfkEAAoAAAAsAAAAAKAAbACHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDCwsLISEhIiIiIyMjJCQkJSUlJiYmJycnKCgoKSkpKioqKysrLCwsLS0tLi4uLy8vMDAwMTExMjIyMzMzNDQ0NTU1NjY2Nzc3ODg4OTk5Ojo6Ozs7PDw8PT09Pj4+Pz8/QEBAQUFBQkJCQ0NDRERERUVFRkZGR0dHSEhISUlJSkpKS0tLTExMTU1NTk5OT09PUFBQUVFRUlJSU1NTVFRUVVVVVlZWV1dXWFhYWVlZWlpaW1tbXFxcXV1dXl5eX19fYGBgYWFhYmJiY2NjZGRkZWVlZmZmZ2dnaGhoaWlpampqa2trbGxsbW1tbm5ub29vcHBwcXFxcnJyc3NzdHR0dXV1dnZ2d3d3eHh4eXl5enp6e3t7fHx8fX19fn5+f39/gICAgYGBgoKCg4ODhISEhYWFhoaGh4eHiIiIiYmJioqKi4uLjIyMjY2Njo6Oj4+PkJCQkZGRkpKSk5OTlJSUlZWVlpaWl5eXmJiYmZmZmpqam5ubnJycnZ2dnp6en5+foKCgoaGhoqKio6OjpKSkpaWlpqamp6enqKioqampqqqqq6urrKysra2trq6ur6+vsLCwsbGxsrKys7OztLS0tbW1tra2t7e3uLi4ubm5urq6u7u7vLy8vb29vr6+v7+/wMDAwcHBwsLCw8PDxMTExcXFxsbGx8fHyMjIycnJysrKy8vLzMzMzc3Nzs7O0tLS2NjY5ubm8/Pz+vr6/f39/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+////CP8AHwgcSLDgv4MHDSJcWLChw4cQI0qcSLGixYsYHyR8yDCjx48gQ4r0iJBiyZEoU6pcyXGjRZcsY8qcORHmwIUnCdqkybOnypw3bQLV+M+n0aMkhxIt2lIh0qdQHe4UqLQhUKZRsyKdSvSiS65aw/7E6hQjWbBi04Ikq5NtRZhu1col2fQj3Ll4MxZ1W9WrzryA32q0mhIr2sCB95YdeRaxY4hs49r9+7gy1cE3Vza2XPkqy82cEd/9TDl0YtCFDZt2fFay3suZVycOqnm0bNafW99+7Hoy7d24x5YGPjt1W+LBGetGLhqlUObJ1/IN2Rf6a6q9BRtMaviwdYmo127/9+o6+3fIx0XC9Y49Ivvzi7u+vLq+pvnq8K3Wt999uPy6QQ31HnyKpQcZX6optNN+2C2Xn3tLGahfXb3hxKCEA+a3HoLgUWdeW/g9GJeF3GnX4YQPtvRhgFN9Bd6HXK14Hns5RSaUUod1RFiKL1YYmYT6haegezKmaKGOw8H4m1TZZcijX7G9dOCLT86U4ImwoThllTEJKZV/7dXEZZdgfhnlkg1uGOKYJpW5Y5ZhNnjmm2z6hpmYTALpY5F1JsknmqXd92efd0ZInoGg4ThonTcO2N+Se3XnJaFUOsfUlYVCuiijTmrpIpaZUvrWpjf+ByGcos63aZAmrioqkj5h/5qqXZ3q9eis6sXqJq5muUrkrbx62CtaFwYr7KgB0mmqseqtOCJO8THLmJTzSatZtSb5ai2Qv1a6rXCqIqjtt+MdWi6517aa0KXokjmYZCNiNm67sRWYJ3r0/lRmSQKumS+1y5ra4rz5AhvqwP865x+80yWcq6a9OiweiLUSTK6M0HIksZ3elrcxXW3Oee7HeIaM6sgkb5ltnGamTKStFbpcMmkyq1xbzfi6i7Oy4O6MsqU+t9xz0LvSSjTPHlq87bj+4qxtrSm72rTPq0ItM6lK/0vq0VAKHS3XL5sLNrJkj43tgVm7PHDaTn9ltdlMsg333HTXbfeTR+Y9tcsBAQAh+QQACgAAACwAAAAAoABsAIcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBQUNDQ0hISEiIiIjIyMkJCQlJSUmJiYnJycoKCgpKSkqKiorKyssLCwtLS0uLi4vLy8wMDAxMTEyMjIzMzM0NDQ1NTU2NjY3Nzc4ODg5OTk6Ojo7Ozs8PDw9PT0+Pj4/Pz9AQEBBQUFCQkJDQ0NERERFRUVGRkZHR0dISEhJSUlKSkpLS0tMTExNTU1OTk5PT09QUFBRUVFSUlJTU1NUVFRVVVVWVlZXV1dYWFhZWVlaWlpbW1tcXFxdXV1eXl5fX19gYGBhYWFiYmJjY2NkZGRlZWVmZmZnZ2doaGhpaWlqampra2tsbGxtbW1ubm5vb29wcHBxcXFycnJzc3N0dHR1dXV2dnZ3d3d4eHh5eXl6enp7e3t8fHx9fX1+fn5/f3+AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqam+vr7X19fp6en29vb8/Pz+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7////+/v7+/v7+/v7///8I/wAfCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRifuSHl2aMKlTgfuYSoX6tGDVqUSVLoyKVejVply7/tR6MCxZsT3PgkXr8+uDsATVssUpt2zduTXvwr2LlybfuGat/u1bcvBXp4gHuiVsMrBguG8ZDmbc8axZy4vLUj4JWTHkzpI3I50c1yBmwIhTlxb9kLRp1J4/N/XMuuFh14kBR3RcW6Fe0A615p6tuDfC4XaBg71se7Vx3Y8/42YevPhz6BCVW3W+lfr1t9L3nv/ubj00d+O3gSvl+pesdqqm3xPG/P4wcai+1Wbe7FZ++ch2ndedf3PV5Rp+CL4GXmv7MYYcbdkJCCB4qdF3IFq/EchdZxouGFuFHWZ1XIj/caiheGuxZSGBFU7oIoTmMSgWitmZKCGFIEbHIok6XaYciA3CWJ1tP/JI14BGChljcuyppmRR4jmpUYcrkvefUdoZKaV/wwUZ35VZZSnmgwpuJRhSNwLFJZD0jSiZjxTtdRRpP8bX5ZtUJZmgnjGxh6NlOnJYZoovogmmmth5qKiLgp7pW5qtHYoomHLCaOJV7UHanJ9zUsobfJlKyihGlWL5KaigGZZmqXF6h+WT+3H/eSOruwHKlHuGhXjqhic+eOFO0q3l5aJFJpocobeON6iqoiYIX3RWdqXsebG6GiBsbn6pIoJydRuepnnaySSZ0oqL7YfeysjkdeppFtyvtlrHp4jXGuvcr83m1mKBdWqrIL4CRtUewDyFau6go22n7lTMZlscje+eCeSI884kX32pVkVnsMs1utRka74p5rl4RkZwXs3lqV6uDi8a8ZNeETktalI6y6tF1gY177CKpvtsRbTqPCXHN29IKrg9bqSfvBDjmlHOY3EUL6ulVjwqvTgbDSqjwtl80a6TZu2soIBqLHWzBSfsbqE5czol2sDq2m+q5Tlm9Z6dLuzupbJxkas00j2eiGTf+iIsttdeheyonZiWFnSrgMcdLW0Co+ne2zAPZXDkxD1ea+ZhvpZxjWzGq7bLyXoMur/Iagm1VPoJdzG5DuNrOoZLyww54h2vzjDRlvLZdaT28ptfuE9Xvjt/Gd9tOIPOj4Vr9Mfq/RzPlXlJ/Xdfl8799+CHL/745Jdv/vnop6/++uxnP/FOAQEAIfkEAAoAAAAsAAAAAKAAbACHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDCwsLISEhIiIiIyMjJCQkJSUlJiYmJycnKCgoKSkpKioqKysrLCwsLS0tLi4uLy8vMDAwMTExMjIyMzMzNDQ0NTU1NjY2Nzc3ODg4OTk5Ojo6Ozs7PDw8PT09Pj4+Pz8/QEBAQUFBQkJCQ0NDRERERUVFRkZGR0dHSEhISUlJSkpKS0tLTExMTU1NTk5OT09PUFBQUVFRUlJSU1NTVFRUVVVVVlZWV1dXWFhYWVlZWlpaW1tbXFxcXV1dXl5eX19fYGBgYWFhYmJiY2NjZGRkZWVlZmZmZ2dnaGhoaWlpampqa2trbGxsbW1tbm5ub29vcHBwcXFxcnJyc3NzdHR0dXV1dnZ2d3d3eHh4eXl5enp6e3t7fHx8fX19fn5+f39/gICAgYGBgoKCg4ODhISEhYWFhoaGh4eHiIiIiYmJioqKi4uLjIyMjY2Njo6Oj4+PkJCQkZGRkpKSk5OTlJSUlZWVlpaWl5eXmJiYmZmZmpqam5ubnJycnZ2dnp6en5+foKCgoaGhoqKio6OjpKSkpaWlpqamp6enqKioqampqqqqq6urrKysra2trq6ur6+vsLCwsbGxsrKys7OztLS0tbW1tra2t7e3uLi4ubm5urq6u7u7vLy8vb29vr6+v7+/wMDAwcHBwsLCw8PDxMTExcXFxsbGx8fHy8vL2NjY5ubm8PDw+Pj4/Pz8/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+////CP8AHwgcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdqvKf139ce34l+BVs2JpeFZo9GzPtQrdsXcJ9OzcuyroPytbFa3fk3LJk/67t63ftWISCCRcmy/Cv4pCJGw8e/Bgj4IF8ExqunJFvZs2MOVPM/Bk0ZtETSVN2OBl1RM+lQ5+e7brh3sN09eKOXZs2bturffduLNug7t90h6ulLVC35eDK4ZpFntey8oOtNUNvTvx6Qcfcjev/zQu2vNrtvadXR7yXsWrv3w07Z858unTq3idnD/+9eHD0te0XXnmrCXgZefD5hx195BGIGGYAoqbeber1h+CDDEann3EXYujheglGVhx/JC5YYn7xbZcWbyRGKOFtFsoHoHQJiifgiJ/dV6OJzeFFYYoj7jgghOJhdyCRQloYX5EPsXgddD66iJ+QOfKoXWfHzUdVaf+p6ORbrH05VGxQeoali4FBNWNys40nkZiBofkTmVYelp2YUbrJHlMR3hclm4A2aCR1cOok5ZQQoodoh4yet2RScqZY4IwqptkkZYXaFCl7mK54JGlBSgZeUZteqWSPlqYK4puhAlWqqcIxoypioxDRaNSrpsW6aoN20vpahkHh+uFmJzaa6ZLH0vSqmb45eGOxFSU706ZHylZgol1WhmelwELrq11fKtotf1qKhqaPSK5ZI4uTWulufpRyeJqnx3EnLFtcFulprVT++eibiw7nL6qp3fuYv7wdKK25P+aWaJKinlcvxKOVSXFHA1/MUbkad+zxxyCHLPLIJJds8skop6zyyiy37HJYWRpcUkAAIfkEAAoAAAAsAAAAAKAAbACHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDCwsLISEhIiIiIyMjJCQkJSUlJiYmJycnKCgoKSkpKioqKysrLCwsLS0tLi4uLy8vMDAwMTExMjIyMzMzNDQ0NTU1NjY2Nzc3ODg4OTk5Ojo6Ozs7PDw8PT09Pj4+Pz8/QEBAQUFBQkJCQ0NDRERERUVFRkZGR0dHSEhISUlJSkpKS0tLTExMTU1NTk5OT09PUFBQUVFRUlJSU1NTVFRUVVVVVlZWV1dXWFhYWVlZWlpaW1tbXFxcXV1dXl5eX19fYGBgYWFhYmJiY2NjZGRkZWVlZmZmZ2dnaGhoaWlpampqa2trbGxsbW1tbm5ub29vcHBwcXFxcnJyc3NzdHR0dXV1dnZ2d3d3eHh4eXl5enp6e3t7fHx8fX19fn5+f39/gICAgYGBgoKCg4ODhISEhYWFhoaGh4eHiIiIiYmJioqKi4uLjIyMjY2Njo6Oj4+PkJCQkZGRkpKSk5OTlJSUlZWVlpaWl5eXmJiYmZmZmpqam5ubnJycnZ2dnp6en5+foKCgoaGhoqKio6OjpKSkpaWlpqamp6enqKioqampqqqqq6urrKysra2trq6ur6+vsLCwsbGxsrKys7OztLS0tbW1tra2t7e3uLi4ubm5urq6u7u7vLy8vb29vr6+v7+/wMDAwcHBwsLCw8PDxMTExcXFxsbGx8fHy8vL2NjY5ubm8PDw+Pj4/Pz8/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+////CP8AHwgcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdqvKf139ce34l+BVs2JpeFZo9GzPtQrdsXcJ9OzcuyroPytbFa3fk3LJk/67t63ftWISCCRcmy/Cv4pCJGw8e/Bgj4IF8ExqunJFvZs2MOVPM/Bk0ZtETSVN2OBl1RM+lQ5+e7brh3sN09eKOXZs2bturffduLNug7t90h6ulLVC35eDK4ZpFntey8oOtNUNvTvx6Qcfcjev/zQu2vNrtvadXR7yXsWrv3w07Z858unTq3idnD/+9eHD0te0XXnmrCXgZefD5hx195BGIGGYAoqbeber1h+CDDEann3EXYujheglGVhx/JC5YYn7xbZcWbyRGKOFtFsoHoHQJiifgiJ/dV6OJzeFFYYoj7jgghOJhdyCRQloYX5EPsXgddD66iJ+QOfKoXWfHzUdVaf+p6ORbrH05VGxQeoali4FBNWNys40nkZiBofkTmVYelp2YUbrJHlMR3hclm4A2aCR1cOok5ZQQoodoh4yet2RScqZY4IwqptkkZYXaFCl7mK54JGlBSgZeUZteqWSPlqYK4puhAlWqqcIxoypioxDRaNSrpsW6aoN20vpahkHh+uFmJzaa6ZLH0vSqmb45eGOxFSU706ZHylZgol1WhmelwELrq11fKtotf1qKhqaPSK5ZI4uTWulufpRyeJqnx3EnLFtcFulprVT++eibiw7nL6qp3fuYv7wdKK25P+aWaJKinlcvxKOVSXFHA1/MUbkad+zxxyCHLPLIJJds8skop6zyyiy37HJYWRpcUkAAIfkEAAoAAAAsAAAAAKAAbACHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDCwsLISEhIiIiIyMjJCQkJSUlJiYmJycnKCgoKSkpKioqKysrLCwsLS0tLi4uLy8vMDAwMTExMjIyMzMzNDQ0NTU1NjY2Nzc3ODg4OTk5Ojo6Ozs7PDw8PT09Pj4+Pz8/QEBAQUFBQkJCQ0NDRERERUVFRkZGR0dHSEhISUlJSkpKS0tLTExMTU1NTk5OT09PUFBQUVFRUlJSU1NTVFRUVVVVVlZWV1dXWFhYWVlZWlpaW1tbXFxcXV1dXl5eX19fYGBgYWFhYmJiY2NjZGRkZWVlZmZmZ2dnaGhoaWlpampqa2trbGxsbW1tbm5ub29vcHBwcXFxcnJyc3NzdHR0dXV1dnZ2d3d3eHh4eXl5enp6e3t7fHx8fX19fn5+f39/gICAgYGBgoKCg4ODhISEhYWFhoaGh4eHiIiIiYmJioqKi4uLjIyMjY2Njo6Oj4+PkJCQkZGRkpKSk5OTlJSUlZWVlpaWl5eXmJiYmZmZmpqam5ubnJycnZ2dnp6en5+foKCgoaGhoqKio6OjpKSkpaWlpqamp6enqKioqampqqqqq6urrKysra2trq6ur6+vsLCwsbGxsrKys7OztLS0tbW1tra2t7e3uLi4ubm5urq6u7u7vLy8vb29vr6+v7+/wMDAwcHBwsLCw8PDxMTExcXFxsbGx8fHy8vL2NjY5ubm8PDw+Pj4/Pz8/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+////CP8AHwgcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdqvKf139ce34l+BVs2JpeFZo9GzPtQrdsXcJ9OzcuyroPytbFa3fk3LJk/67t63ftWISCCRcmy/Cv4pCJGw8e/Bgj4IF8ExqunJFvZs2MOVPM/Bk0ZtETSVN2OBl1RM+lQ5+e7brh3sN09eKOXZs2bturffduLNug7t90h6ulLVC35eDK4ZpFntey8oOtNUNvTvx6Qcfcjev/zQu2vNrtvadXR7yXsWrv3w07Z858unTq3idnD/+9eHD0te0XXnmrCXgZefD5hx195BGIGGYAoqbeber1h+CDDEann3EXYujheglGVhx/JC5YYn7xbZcWbyRGKOFtFsoHoHQJiifgiJ/dV6OJzeFFYYoj7jgghOJhdyCRQloYX5EPsXgddD66iJ+QOfKoXWfHzUdVaf+p6ORbrH05VGxQeoali4FBNWNys40nkZiBofkTmVYelp2YUbrJHlMR3hclm4A2aCR1cOok5ZQQoodoh4yet2RScqZY4IwqptkkZYXaFCl7mK54JGlBSgZeUZteqWSPlqYK4puhAlWqqcIxoypioxDRaNSrpsW6aoN20vpahkHh+uFmJzaa6ZLH0vSqmb45eGOxFSU706ZHylZgol1WhmelwELrq11fKtotf1qKhqaPSK5ZI4uTWulufpRyeJqnx3EnLFtcFulprVT++eibiw7nL6qp3fuYv7wdKK25P+aWaJKinlcvxKOVSXFHA1/MUbkad+zxxyCHLPLIJJds8skop6zyyiy37HJYWRpcUkAAOw==';

testModule('edge-detect', {}, benchmark, gif, 'gif');