import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar bg-primary" data-bs-theme="dark">
            <nav class="navbar navbar-expand-lg bg-body-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/add">Recipie</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/add">Add Recipie</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/search">Search Recipie</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/view">view all</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
</nav>
            
        </div>
    )
}

export default Navbar